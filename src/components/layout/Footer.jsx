import { styled } from "styled-components";
import logo from "./../../img/FooterLogo.png";
import SocialLogos from "./../../img/SocialLogos.png";

const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 330px;
  background-color: #2b3252;
  flex-direction: row;
  justify-content: center;

  @media only screen and (max-width: 1150px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 35px;

  @media only screen and (max-width: 1150px) {
    gap: 5px;
    flex: 0;
  }
`;

const Logo = styled.img`
  width: 210px;
  height: 70px;

  @media only screen and (max-width: 1150px) {
    width: 110px;
    height: 35px;
  }
`;

const Title = styled.h2`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
  opacity: 0.7;

  @media only screen and (max-width: 1150px) {
    font-size: 8px;
  }
`;

const Middle = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  gap: 45px;

  @media only screen and (max-width: 1150px) {
    gap: 0;
    align-items: center;
    flex: 0;
    padding: 0 0 5px 0;
  }
`;

const List = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 50px;

  @media only screen and (max-width: 1150px) {
    gap: 15px;
  }
`;

const ListItem = styled.h1`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #ffffff;
  cursor: pointer;

  @media only screen and (max-width: 1150px) {
    font-size: 9px;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
`;

const Logos = styled.img`
  cursor: pointer;

  @media only screen and (max-width: 1150px) {
    width: 41px;
    height: 16px;
  }
`;

const Right = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 1150px) {
    gap: 10px;
    flex: 0;
  }
`;

const TopInput = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;

  @media only screen and (max-width: 1150px) {
    gap: 5px;
    flex-direction: column;
    align-items: center;
  }
`;

const TopInputItem = styled.input`
  width: 230px;
  height: 40px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  background-color: transparent;

  @media only screen and (max-width: 1150px) {
    width: 115px;
    height: 20px;
    font-size: 8px;
  }
`;

const BottomInput = styled.div`
  display: flex;

  @media only screen and (max-width: 1150px) {
    justify-content: center;
    padding: 0 0 5px 0;
  }
`;

const BottomInputItem = styled.input`
  width: 480px;
  height: 120px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  background-color: transparent;

  @media only screen and (max-width: 1150px) {
    width: 240px;
    height: 60px;
    font-size: 10px;
  }
`;

const Footer = () => {
  return (
    <Section id="contact">
      <Container>
        <Left>
          <Logo src={logo} />
          <Title> © 2023 All Rights Reserved</Title>
        </Left>
        <Middle>
          <List>
            <ListItem>Services</ListItem>
            <ListItem>Projects</ListItem>
            <ListItem>About</ListItem>
            <ListItem>Contact</ListItem>
          </List>
          <LogoContainer>
            <Logos src={SocialLogos} />
          </LogoContainer>
        </Middle>
        <Right>
          <TopInput>
            <TopInputItem placeholder="Name" />
            <TopInputItem placeholder="Email" />
          </TopInput>
          <BottomInput>
            <BottomInputItem placeholder="Text" />
          </BottomInput>
        </Right>
      </Container>
    </Section>
  );
};

export default Footer;
