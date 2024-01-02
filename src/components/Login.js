import * as React from 'react';
import axios from "axios";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import { API_BASE_URL } from "../utils/Constants";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FormControl } from '@mui/material';
import { Container } from "@mui/material";



// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();


export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const submit = async e => {
        e.preventDefault();

        const user = {
            username: username,
            password: password
        };
        const { data } = await axios.post(API_BASE_URL + 'token/', user, {
            headers: {
                'Content-Type': 'application/json'
            }
        }, { withCredentials: true });

        localStorage.clear();
        localStorage.setItem('access_token', data.access);
        localStorage.setItem('refresh_token', data.refresh);
        axios.defaults.headers.common['Authorization'] = `Bearer ${data['access']}`;
        window.location.href = '/'

    }

    return (
        <ThemeProvider theme={defaultTheme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                    item

                    sm={12}
                    md={12}
                    sx={{
                        backgroundImage: 'url("/desktop--dark-mode@3x.png")',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <Container maxWidth="sm" >
                        <FormControl className="Auth-form" onSubmit={submit}>
                            <Box component="form" noValidate onSubmit={submit} sx={{ mt: 1 }}>
                                <label>Username</label>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name='username'
                                    type='text'
                                    value={username}
                                    onChange={e => setUsername(e.target.value)}
                                    autoFocus
                                />
                                <label
                                 sx={{
                                    color: 'text.primary',
                                    
                                  }}>Password</label>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name='password'
                                    type="password"
                                    className="form-control mt-1"
                                    placeholder="Enter password"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    autoComplete="current-password"
                                />
                                <FormControlLabel
                                    control={<Checkbox value="remember" color="primary" />}
                                    label="Remember me"
                                    
                                />
                                <Button
                                    sx={{
                                        marginBottom: 1,
                                        paddingBottom: 2,
                                        paddingTop: 2,
                                        borderRadius: 2,
                                        overflow: 'hidden',
                                        backgroundColor: "rgba(255,255,255,0.1)",
                                        mt: 3, mb: 2,
                                        color: '#fff'
                                        
                                    }}
                                    type="submit"
                                    fullWidth
                                    variant="outlined" 
                                    size="large" color="inherit"

                                >
                                    Sign In
                                </Button>
                                <Grid container>
                                    <Grid item xs>
                                        <Link href="#" variant="body2">
                                            Forgot password?
                                        </Link>
                                    </Grid>
                                    <Grid item>
                                        <Link href="#" variant="body2">
                                            {"Don't have an account? Sign Up"}
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Box>
                        </FormControl>
                    </Container>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}