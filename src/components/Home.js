import React from 'react';
import {useEffect, useState} from "react";
import axios from "axios";
import {Navigate} from "react-router-dom";
import {API_BASE_URL} from "../utils/constants";

export const Home = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        if (localStorage.getItem('access_token') === null) {
            window.location.href = '/login'
        } else {
            (async () => {
                try {
                    console.log(localStorage.getItem('access_token'));
                    const {data} = await axios.get(API_BASE_URL + 'account/me', {
                        headers: {
                            'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
                            'Content-Type': 'application/json',
                        },
                    });

                    console.log(data);

                    setMessage(data.first_name);
                } catch (e) {
                    console.log('not auth')
                }
            })()
        }
        ;
    }, []);

    return (
        <div className="form-signin mt-5 text-center">
            <h3>Hi {message}</h3>
        </div>
    )
}
