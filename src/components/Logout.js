import React from 'react';
import {useEffect, useState} from "react";
import axios from "axios";
import {API_BASE_URL} from "../utils/Constants";

export const Logout = () => {

    useEffect(() => {
        (async () => {
            try {
                const {data, status} = await axios.post(API_BASE_URL + 'accounts/logout',{
                    refresh_token:localStorage.getItem('refresh_token')
                } ,{headers: {
                        'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
                        'Content-Type': 'application/json'
                    }}, {withCredentials: true});
                if ( status === 200) {
                    console.log('logout', data)
                    localStorage.clear();
                    axios.defaults.headers.common['Authorization'] = null;
                    window.location.href = '/login'
                }

                console.log('logout', data)
                localStorage.clear();
                // axios.defaults.headers.common['Authorization'] = null;
                // window.location.href = '/login'
            } catch (e) {
                console.log('logout not working')
            }
        })();
    }, []);




    // console.log(data)
    // localStorage.clear();
    // localStorage.setItem('token', data.access);
    // localStorage.setItem('refresh_token', data.refresh);
    // axios.defaults.headers.common['Authorization'] = `Bearer ${data['access']}`;
    // window.location.href = '/'


    return (
        <div></div>
    )
}