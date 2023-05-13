import { styled } from "styled-components";
import BackgroundImg from "./../img/BackgroundImage.jpg";
import Arrow from "./../img/Vector.png";
import BlackArrow from "./../img/BlackArrow.png";

const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  max-width: 1700px;
  width: 100%;
  height: 780px;
  display: flex;
  background-image: linear-gradient(
      205.96deg,
      rgba(67, 26, 26, 0) -7.14%,
      #431a1a 121.86%
    ),
    url(${BackgroundImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: 0 12px 0 -4px #2b3252;
  box-shadow: 0px 21px 32px -3px rgba(0, 0, 0, 0.75);

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  margin-left: 140px;

  @media only screen and (max-width: 768px) {
    margin-left: 0;
    text-align: center;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 62px;
  line-height: 76px;
  text-transform: uppercase;
  color: white;

  @media only screen and (max-width: 768px) {
    font-size: 50px;
  }
`;

const Text = styled.h2`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  color: #b5b5b5;
`;

const Button = styled.button`
  width: 130px;
  height: 42px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 8px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  color: white;
  cursor: pointer;
  background-image: url(${Arrow});
  background-repeat: no-repeat;
  background-position: right 14px center;
  background-size: 10px;

  &:hover {
    color: #000000;
    transition: 0.3s;
    background-image: url(${BlackArrow});
    background-repeat: no-repeat;
    background-position: right 12px center;
    background-size: 13px;
    background-color: rgba(255, 255, 255, 0.365);
  }
`;

const Hero = () => {
  return (
    <Section id="hero">
      <Container>
        <Left>
          <Title>
            Company’s First <br />
            Service Title
          </Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
            <br /> ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation
            <br /> ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Text>
          <Button>See More</Button>
        </Left>
      </Container>
    </Section>
  );
};

export default Hero;
