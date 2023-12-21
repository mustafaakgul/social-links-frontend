import { Button } from "@mui/material";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { API_BASE_URL } from "../utils/Constants";
import axios from 'axios';
import Grid from '@mui/material/Grid';

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
`;
const SocialLinks = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: var(--padding-5xl);
  gap: var(--gap-base);
  overflow: scrool;
`;
const Overflow = styled.div`

  overflow: scrool;
`;
const Link = styled.div`
  flex: 1;
  position: relative;
  line-height: 24px;
  font-weight: 500;
`;
const Button1 = styled.div`
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
`;
const DesktopDarkModeRoot = styled.div`
  position: relative;
  width: 100%;
  height: 2400px;
  overflow: hidden;
  //background-color: black;
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
        // Authorization: `Bearer ${localStorage.getItem('token')}`
        'Content-Type': 'application/json',
        'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzAzMTkyMDYyLCJpYXQiOjE3MDMxMDU2NjIsImp0aSI6ImFjNWI5ZjY4NDE1MzQ0Y2FhYTM1ZmY1OTQwZTYwZmY3IiwidXNlcl9pZCI6MX0.bP2U9JfAXSz6_QfNrjnjbnpI2k3GpDoRjoYInZPfRVg`
      }
    })
      .then(response => {
        console.log("Me");
        setMessage(response.data);
        setLinks(response.data.profile.links)
        //console.log(message);
        console.log(links);
      })
      .catch(error => {
        setError(error);
        console.log(error);
      });

    axios.get(`${API_BASE_URL}links/custom-links`, {
      headers: {
        // Authorization: `Bearer ${localStorage.getItem('token')}`
        'Content-Type': 'application/json',
        'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzAzMTkyMDYyLCJpYXQiOjE3MDMxMDU2NjIsImp0aSI6ImFjNWI5ZjY4NDE1MzQ0Y2FhYTM1ZmY1OTQwZTYwZmY3IiwidXNlcl9pZCI6MX0.bP2U9JfAXSz6_QfNrjnjbnpI2k3GpDoRjoYInZPfRVg`
      }
    })
      .then(response => {
        //console.log("Custom");
        setCustomLinks(response.data.results);
        console.log(customLinks);
      })
      .catch(error => {
        setError(error);
        console.log(error);
      });
  }, []);

  function link2CustomLinks() {
    console.log("link2CustomLinks");
  }

  return (
    <DesktopDarkModeRoot>
      <Container>
        <Profile>
          <AvatarIcon alt="" src="/themedark-mode.svg" />
          <Maykbrito>@maykbrito</Maykbrito>
        </Profile>
        
        <SocialLinks sx={{ minHeight: '60vh', overflow: 'auto' }}>
          <SocialLinksIcon alt="" src="/social-links.svg" />
          <SocialLinksIcon alt="" src="/social-links1.svg" />
          <SocialLinksIcon alt="" src="/social-links2.svg" />
          <SocialLinksIcon alt="" src="/social-links3.svg" />
          <SocialLinksIcon alt="" src="/social-links.svg" />
          <SocialLinksIcon alt="" src="/social-links1.svg" />
          <SocialLinksIcon alt="" src="/social-links2.svg" />
          <SocialLinksIcon alt="" src="/social-links3.svg" />
          <SocialLinksIcon alt="" src="/social-links.svg" />
          <SocialLinksIcon alt="" src="/social-links1.svg" />
          <SocialLinksIcon alt="" src="/social-links2.svg" />
          <SocialLinksIcon alt="" src="/social-links3.svg" />
          <SocialLinksIcon alt="" src="/social-links.svg" />
          <SocialLinksIcon alt="" src="/social-links1.svg" />
          <SocialLinksIcon alt="" src="/social-links2.svg" />
          <SocialLinksIcon alt="" src="/social-links3.svg" />
        </SocialLinks>
        <Links>

          <Grid container spacing={2} alignItems="center" display="flex" justifyContent="center" >
            <Grid item xs={7} sm={7} md={10} lg={12} >
              <Button1>
                <Link>Veja meu portfólio</Link>
              </Button1>
            </Grid>
            <Grid item xs={7} sm={7} md={10} lg={12} >
              <Button1>
                <Link>Veja meu portfólio</Link>
              </Button1>
            </Grid>
            <Grid item xs={7} sm={7} md={10} lg={12} >
              <Button1>
                <Link>Veja meu portfólio</Link>
              </Button1>
            </Grid>
            <Grid item xs={7} sm={7} md={10} lg={12} >
              <Button1>
                <Link>Veja meu portfólio</Link>
              </Button1>
            </Grid>
            <Grid item xs={7} sm={7} md={10} lg={12} >
              <Button1>
                <Link>Veja meu portfólio</Link>
              </Button1>
            </Grid>
            <Grid item xs={7} sm={7} md={10} lg={12} >
              <Button1>
                <Link>Veja meu portfólio</Link>
              </Button1>
            </Grid>
            <Grid item xs={7} sm={7} md={10} lg={12} >
              <Button1>
                <Link>Veja meu portfólio</Link>
              </Button1>
            </Grid>
            <Grid item xs={7} sm={7} md={10} lg={12} >
              <Button1>
                <Link>Veja meu portfólio</Link>
              </Button1>
            </Grid>
            <Grid item xs={7} sm={7} md={10} lg={12} >
              <Button1>
                <Link>Veja meu portfólio</Link>
              </Button1>
            </Grid>
            <Grid item xs={7} sm={7} md={10} lg={12} >
              <Button1>
                <Link>Veja meu portfólio</Link>
              </Button1>
            </Grid>
            <Grid item xs={7} sm={7} md={10} lg={12} >
              <Button1>
                <Link>Veja meu portfólio</Link>
              </Button1>
            </Grid>
            <Grid item xs={7} sm={7} md={10} lg={12} >
              <Button1>
                <Link>Veja meu portfólio</Link>
              </Button1>
            </Grid>
            <Grid item xs={7} sm={7} md={10} lg={12} >
              <Button1>
                <Link>Veja meu portfólio</Link>
              </Button1>
            </Grid>
          </Grid>
        </Links>
      </Container>
    </DesktopDarkModeRoot>
  );
};

export default DesktopDarkMode;
