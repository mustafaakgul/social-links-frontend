import React from 'react';
import Button from '@mui/material/Button';

import axios from 'axios';

import {API_BASE_URL} from "../utils/Constants";
import {FormControl, InputLabel, Input, FormHelperText} from "@mui/material";

class CreateCustomLink extends React.Component{
    state = {
        id: 0,
        title: "",
        url: "",
    }

    componentDidMount(){
        if (localStorage.getItem('access_token') === null) {
            window.location.href = '/login'
        }
    }

    createCustomLink = (event) => {
        event.preventDefault();
        axios.post(`${API_BASE_URL}/links/custom-links-generics`, {
            title: this.state.title,
            url: this.state.url,
        }, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
                'Content-Type': 'application/json',
            }
        })
            .then(response => {
                console.log(response.data);
                this.props.resetState();
                this.props.toggle();
                window.location.href = '/custom-links'
            })
            .catch(error => {
                console.log(error);
            });
    }

    defaultIfEmpty = value => {
        return value === "" ? "" : value;
    };

    render() {
        <FormControl>
            <InputLabel htmlFor="my-input">Email address</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
            <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
        </FormControl>
    }
}