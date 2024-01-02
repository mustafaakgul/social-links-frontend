import { Button } from "@mui/material";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { API_BASE_URL } from "../utils/Constants";
import axios from 'axios';
import Grid from '@mui/material/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

import { faGithub } from '@fortawesome/free-brands-svg-icons'

import { Container } from "@mui/material";


const AvatarIcon = styled.img`
  position: relative;
  width: 25%;
  height: auto;
  margin-top: 5%;
`;
const Maykbrito = styled.div`
  position: relative;
  line-height: 24px;
`;
const Profile = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-5xl);
  gap: 8px;
`;

const Link = styled.div`
  flex: 1;
  position: relative;
  line-height: 24px;
  font-weight: 500;
`;


const Button2 = styled(Button)`
  align-self: stretch;
`;
const Links = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-5xl);
  gap: var(--gap-base);
  text-align: center;
  //overflow-y: auto;
`;

const DesktopDarkModeRoot = styled.div`
  background-image: url("/desktop--dark-mode@3x.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  color: var(--text-color-dark-mode);
  top: 56px;

`;


const DesktopDarkMode = () => {

  const [message, setMessage] = useState('')
  const [customLinks, setCustomLinks] = useState([])
  const [links, setLinks] = useState([])
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios.get(`${API_BASE_URL}accounts/me`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
        'Content-Type': 'application/json',
      }
    })
      .then(response => {
        setMessage(response.data);
        setLinks(response.data.profile.links)
        console.log(response.data);
        console.log(links);
      })
      .catch(error => {
        setError(error);
        console.log(error);
      });

    axios.get(`${API_BASE_URL}links/custom-links`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
        'Content-Type': 'application/json',
      }
    })
      .then(response => {
        console.log(response.data);
        setCustomLinks(response.data.results);
        console.log(customLinks);
      })
      .catch(error => {
        setError(error);
        console.log(error);
      });
  }, []);

  return (
    <DesktopDarkModeRoot>
      
       <Container maxWidth="sm" >
        <Profile>
          <AvatarIcon alt="" src="/themedark-mode.svg" />
          <Maykbrito>@{message.first_name} {message.last_name}</Maykbrito>
          <Maykbrito>Description</Maykbrito>
        </Profile>
   

        <p align="center">
          {/* Dynamic import */}
          <FontAwesomeIcon icon={icon({name: 'twitter', style: 'brands', family: 'classic'})} size="2xl" sx=""/> 
          <FontAwesomeIcon icon={icon({name: 'facebook', style: 'brands', family: 'classic'})}  size="2xl" /> 
          <FontAwesomeIcon icon={icon({name: 'twitch', style: 'brands', family: 'classic'})}  size="2xl" /> 
          {/* individual import */}
          <FontAwesomeIcon icon={faGithub} size="2xl"/>
        </p>

        <Links>
          <Grid container spacing={2} display="flex" >
            {customLinks.map((customLink) => (
                <Grid item xs={12} sm={12} md={12} lg={12} key={customLink.id} >
                  <Grid>
                   <Button className="newbutton" 
                   sx={{ marginBottom: 1,
                   paddingBottom:2,
                   paddingTop:2, 
                   borderRadius: 2,
                   overflow: 'hidden',
                   backgroundColor:"rgba(255,255,255,0.1)" }} 
                   fullWidth href={`${customLink.url}`} target="_blank"
                   variant="outlined" size="large" color="inherit" >
                    {customLink.title}
                    </Button>
                  </Grid>
                </Grid>
            ))}
          </Grid>
        </Links>
      </Container>
    </DesktopDarkModeRoot>
  );
};

export default DesktopDarkMode;
