import { Button } from "@mui/material";
import styled from "styled-components";

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
  height: 100vh;
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
  return (
    <DesktopDarkModeRoot>
      <Container>
        <Profile>
          <AvatarIcon alt="" src="/themedark-mode.svg" />
          <Maykbrito>@maykbrito</Maykbrito>
        </Profile>
        <SocialLinks>
          <SocialLinksIcon alt="" src="/social-links.svg" />
          <SocialLinksIcon alt="" src="/social-links1.svg" />
          <SocialLinksIcon alt="" src="/social-links2.svg" />
          <SocialLinksIcon alt="" src="/social-links3.svg" />
        </SocialLinks>
        <Links>
          <Button1>
            <Link>Inscreva-se no NLW</Link>
          </Button1>
          <Button1>
            <Link>Baixe meu e-book</Link>
          </Button1>
          <Button2
            color="secondary"
            size="large"
            target="_blank"
            variant="outlined"
            href="www.youtube.com"
          >
            Baixe meu e-book
          </Button2>
          <Button1>
            <Link>Veja meu portfólio</Link>
          </Button1>
          <Button1>
            <Link>Conheça o Explorer</Link>
          </Button1>
          <Button1>
            <Link>Conheça o Explorer</Link>
          </Button1>
          <Button1>
            <Link>Conheça o Explorer</Link>
          </Button1>
        </Links>
      </Container>
    </DesktopDarkModeRoot>
  );
};

export default DesktopDarkMode;
