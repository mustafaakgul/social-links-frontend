import { Button } from "@mui/material";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { API_BASE_URL } from "../utils/Constants";
import axios from 'axios';
import Grid from '@mui/material/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

import { faGithub, faFontAwesome } from '@fortawesome/free-brands-svg-icons'




const AvatarIcon = styled.img`
  position: relative;
  width: 112px;
  height: 112px;
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
const SocialLinksIcon = styled.img`
  position: relative;
  width: 40px;
  height: 40px;
  object-fit: cover;
`;
const SocialLinks = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: var(--padding-5xl);
  gap: var(--gap-base);
  //overflow: auto;
`;
const Link = styled.div`
  flex: 1;
  position: relative;
  line-height: 24px;
  font-weight: 500;
`;
const Button3 = styled.div`
  align-self: stretch;
  border-radius: var(--br-5xs);
  background-color: var(--surface-color-dark-mode);
  backdrop-filter: blur(8px);
  border: 1px solid var(--stroke-color-dark-mode);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-base) var(--padding-5xl);
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
  overflow-y: auto;
`;
const Container = styled.div`
  position: absolute;
  top: 56px;
  left: calc(50% - 294px);
  width: 588px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: 90%;
`;
const DesktopDarkModeRoot = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-image: url("/desktop--dark-mode@3x.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  text-align: left;
  font-size: var(--text-md-size);
  color: var(--text-color-dark-mode);
  font-family: var(--text-md);
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
      <Container>
        <Profile>
          <AvatarIcon alt="" src="/themedark-mode.svg" />
          <Maykbrito>@{message.first_name} {message.last_name}</Maykbrito>
          <Maykbrito>Description</Maykbrito>
        </Profile>
   
        
        <SocialLinks>
        {customLinks.map((customLink) => (
          //<a href={`${customLink.url}`} target="_blank" > <SocialLinksIcon alt="" src="/social-links.svg" /></a>
          <a href={`${customLink.url}`} target="_blank" > 

          </a>


          
        ))}
        </SocialLinks>


        <FontAwesomeIcon icon={icon({name: 'twitter', style: 'brands', family: 'classic'})} size="2xl" /> 
        <FontAwesomeIcon icon={icon({name: 'facebook', style: 'brands', family: 'classic'})}  size="2xl" /> 
        <FontAwesomeIcon icon={icon({name: 'twitch', style: 'brands', family: 'classic'})}  size="2xl" /> 
        <FontAwesomeIcon icon="fa-brands fa-github" />
        <FontAwesomeIcon icon={faGithub} />

        <Links>

          <Grid container spacing={2} alignItems="center" display="flex" justifyContent="center" >
            {customLinks.map((customLink) => (
                <Grid item xs={7} sm={7} md={10} lg={12} >
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
