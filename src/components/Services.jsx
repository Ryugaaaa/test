import { styled } from "styled-components";
import Cash from "./../img/Cash.png";
import Wallet from "./../img/Wallet.png";
import Music from "./../img/Music.png";

const Section = styled.div`
  display: flex;
  height: 630px;
  text-align: center;
  justify-content: center;
  padding: 90px 0 0 0;
  flex-direction: column;

  @media only screen and (max-width: 768px) {
    height: 100vh;
    padding: 0;
  }
`;

const Title = styled.h1`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 49px;
  text-align: center;
  text-transform: uppercase;

  @media only screen and (max-width: 768px) {
    font-size: 30px;
    padding: 0 0 100px 0;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  height: 390px;
  flex-direction: row;
  justify-content: center;
  gap: 100px;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 0;
  }
`;

const Left = styled.div`
  max-width: 440px;
  width: 100%;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 40px;

  @media only screen and (max-width: 768px) {
    gap: 0;
  }
`;

const CashImg = styled.img`
  height: 160px;
  cursor: pointer;

  @media only screen and (max-width: 768px) {
    height: 100px;
  }
`;

const CashText = styled.h1`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  line-height: 41px;
  text-align: center;

  @media only screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

const Middle = styled.div`
  max-width: 440px;
  width: 100%;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 40px;

  @media only screen and (max-width: 768px) {
    gap: 0;
  }
`;

const WalletImg = styled.img`
  height: 160px;
  cursor: pointer;

  @media only screen and (max-width: 768px) {
    height: 100px;
  }
`;

const WalletText = styled.h1`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  line-height: 41px;
  text-align: center;

  @media only screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

const Right = styled.div`
  max-width: 440px;
  width: 100%;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 40px;

  @media only screen and (max-width: 768px) {
    gap: 0;
  }
`;

const MusicImg = styled.img`
  height: 160px;
  cursor: pointer;

  @media only screen and (max-width: 768px) {
    height: 100px;
  }
`;

const MusicText = styled.h1`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  line-height: 41px;
  text-align: center;

  @media only screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

const Services = () => {
  return (
    <Section id="services">
      <Title>Services</Title>
      <Container>
        <Left>
          <CashImg src={Cash} />
          <CashText>Service Name</CashText>
        </Left>
        <Middle>
          <WalletImg src={Wallet} />
          <WalletText>Service Name</WalletText>
        </Middle>
        <Right>
          <MusicImg src={Music} />
          <MusicText>Service Name</MusicText>
        </Right>
      </Container>
    </Section>
  );
};

export default Services;
