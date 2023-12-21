import React, {Component} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';
import Grid from '@mui/system/Unstable_Grid';
import styled from '@mui/system/styled';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Button from '@mui/material/Button';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import Box from '@mui/material/Box';
import axios from "axios";

const imageURL = "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

const Background = styled("div")({
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundImage: `url(${imageURL})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
});

const itemData = [
    {
        img: 'https://images.pexels.com/photos/3429877/pexels-photo-3429877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'Purple Heart',
        author: '@jessicajet',
        rows: 2,
        cols: 2,
        featured: true,
    },
    {
        img: 'https://images.pexels.com/photos/3445218/pexels-photo-3445218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'Purple Heart',
        author: '@jessicajet',
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera',
        author: '@helloimnik',
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
        author: '@nolanissac',
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title: 'Hats',
        author: '@hjrc33',
        cols: 2,
    },

];

export default class Me extends Component {

    state = { accounts: "", links: []}

    componentDidMount() {
        this.getProfile();
    }

    getProfile = () => {
        let url = "http://127.0.0.1:8085/api/v1/accounts/me";
        //let url = "http://127.0.0.1:8085/api/v1/tags/";
        const requestOptions = {
            method: 'GET',
            //headers: { 'Content-Type': 'application/json'},
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzAwNzYzNzI5LCJpYXQiOjE3MDA3NjAxMjksImp0aSI6IjJmZDI3Y2Y2Y2JhZTQ3ZDZiMmRjOTExZWJkMWYyN2U0IiwidXNlcl9pZCI6MX0.bEAtpBqvv_S1D20tDzw3CwxtwJnmrNjq6KifhZspuco` },
            //headers: { 'Content-Type': 'application/json', headers: {Authorization: `Bearer ${localStorage.getItem('token')}` } },
        };

        // axios.get('http://127.0.0.1:8085/api/v1/tags/').then((response) => {
        //     //axios.get('http://localhost:8000/api/v1/health-check').then((response) => {
        //     //axios.get('https://jsonplaceholder.typicode.com/todos/1').then((response) => {
        //     console.log(response.data);
        // });

        // if (categoryId) {
        //     url += "?categoryId=" + categoryId;
        // }
        fetch(url, requestOptions)
            .then(response => response.json()) // gelen respon icin repsonsu json a dondur
            .then(data => this.setState({accounts: data})); // gelen datayı set et

        console.log(this.state.accounts);
    }

    render() {
        return (
            <div>
                <React.Fragment>
                    <CssBaseline/>
                    <Grid container>
                        <Background/>

                        <Grid xs={12} sx={{
                            justifyContent: 'center',
                            textAlign: 'center',
                            fontWeight: 'bold',
                            display: 'block',
                        }}>
                            <Box
                                sx={{
                                    position: 'relative',
                                    bottom: '-40px'

                                }}

                            >
                                <Grid sx={{
                                    zIndex: 'tooltip',
                                    position: 'relative',
                                    paddingTop: '400px'
                                }}>


                                    <Typography variant="h3"
                                                sx={{
                                                    justifyContent: 'center',
                                                    alignItems: "center",
                                                    fontWeight: 'bold',
                                                    color: 'white',
                                                    zIndex: 'tooltip',
                                                }} gutterBottom>
                                        {this.state.accounts.first_name} {this.state.accounts.last_name} <VerifiedRoundedIcon color="primary"/>
                                    </Typography>
                                    <Typography variant="h6"
                                                sx={{
                                                    justifyContent: 'center',
                                                    textAlign: 'center',
                                                    fontWeight: 'light',
                                                    color: 'white',
                                                    zIndex: 'tooltip',
                                                }} gutterBottom>
                                        @{this.state.accounts.username}
                                    </Typography>
                                </Grid>


                                <Button variant="contained"
                                        sx={{
                                            borderRadius: '50%',
                                            backgroundColor: '#2772ef',
                                            width: 60,
                                            height: 60,
                                            mr: 0.5,
                                            zIndex: 'tooltip',
                                            '&:hover': {
                                                backgroundColor: '#2772ef',
                                                opacity: [0.9, 0.8, 0.7],
                                            },
                                        }}
                                >
                                    <FacebookRoundedIcon color="white" sx={{fontSize: 40}}/>
                                </Button>
                                <Button variant="contained" color="primary"
                                        sx={{
                                            borderRadius: '50%',
                                            backgroundColor: '#5ecf7c',
                                            width: 60,
                                            height: 60,
                                            mr: 0.5,
                                            zIndex: 'tooltip',
                                            '&:hover': {
                                                backgroundColor: '#5ecf7c',
                                                opacity: [0.9, 0.8, 0.7],
                                            },
                                        }}
                                >
                                    <WhatsAppIcon color="white" sx={{fontSize: 40}}/>
                                </Button>
                                <Button variant="contained"
                                        sx={{
                                            borderRadius: '50%',
                                            backgroundColor: '#4ea0ef',
                                            width: 60,
                                            height: 60,
                                            mr: 0.5,
                                            zIndex: 'tooltip',
                                            '&:hover': {
                                                backgroundColor: '#4ea0ef',
                                                opacity: [0.9, 0.8, 0.7],
                                            },
                                        }}
                                >
                                    <TwitterIcon color="white" sx={{fontSize: 35}}/>
                                </Button>
                                <Button variant="contained"
                                        sx={{
                                            borderRadius: '50%',
                                            backgroundColor: 'blue',
                                            backgroundImage: 'linear-gradient( 135deg,yellow, #ec0086, purple)',
                                            width: 60,
                                            height: 60,
                                            mr: 0.5,
                                            zIndex: 'tooltip',
                                            '&:hover': {
                                                backgroundColor: 'blue',
                                                opacity: [0.9, 0.8, 0.7],
                                            },
                                        }}
                                >
                                    <InstagramIcon color="white" sx={{fontSize: 40}}/>

                                </Button>

                                <Button variant="contained"
                                        sx={{
                                            borderRadius: '50%',
                                            backgroundColor: '#f31a0f',
                                            width: 60,
                                            height: 60,
                                            zIndex: 'tooltip',
                                            '&:hover': {
                                                backgroundColor: '#f31a0f',
                                                opacity: [0.9, 0.8, 0.7],
                                            },
                                        }}
                                >
                                    <YouTubeIcon color="white" sx={{fontSize: 40}}/>
                                </Button>

                            </Box>
                        </Grid>

                    </Grid>


                </React.Fragment>
                <Grid container sx={{backgroundColor: '#40376da3;', width: '100%', zIndex: 'fab'}}>
                    <ImageList sx={{backgroundColor: '#332a61', width: '100%', zIndex: 'fab'}}>
                        <ImageListItem key="Subheader" cols={2}>
                            <ListSubheader component="div"
                                           sx={{
                                               backgroundColor: '#40376d',
                                               color: 'white',
                                               zIndex: 'mobileStepper',
                                               textAlign: 'center',
                                               lineHeight: 2,
                                               mx: 'auto',
                                               width: 300,
                                               borderRadius: '20px',
                                               marginY: 5,

                                           }}
                            >Founder & CEO @Tame
                                Love Dancing <span>💃</span> Read Books <span>📚</span>Miami<span>📍</span>

                            </ListSubheader>
                        </ImageListItem>
                        {itemData.map((item) => (
                            <ImageListItem key={item.img}>
                                <img
                                    src={`${item.img}?w=248&fit=crop&auto=format`}
                                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                    alt={item.title}
                                    loading="lazy"
                                />
                                <ImageListItemBar
                                    title={item.title}
                                    subtitle={item.author}
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Grid>
            </div>

        );
    }
}