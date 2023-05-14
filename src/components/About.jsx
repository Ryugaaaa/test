import { styled } from "styled-components";
import AboutBg from "./../img/AboutImg.jpg";
import Arrow from "./../img/RedVector.png";
import WhiteArrow from "./../img/Vector.png";

const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1420px;
  width: 100%;
  height: 950px;

  @media only screen and (max-width: 1150px) {
    flex-direction: column;
    height: auto;
    margin-bottom: 20px;
    align-items: center;
  }
`;

const Left = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 768px) {
    flex: 0;
  }
`;

const AboutImg = styled.img`
  width: 590px;
  height: 640px;
  box-shadow: 0px 8px 16px -2px rgba(0, 0, 0, 1);
  -webkit-box-shadow: 0px 8px 16px -2px rgba(0, 0, 0, 1);
  -moz-box-shadow: 0px 8px 16px -2px rgba(0, 0, 0, 1);

  @media only screen and (max-width: 768px) {
    width: 260px;
    height: 320px;
  }
`;

const Right = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  gap: 20px;

  @media only screen and (max-width: 1150px) {
    flex: 0;
    align-items: center;
    text-align: center;
    margin-top: 20px;
    gap: 10px;
  }
`;

const Title = styled.h1`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  color: #000000;

  @media only screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

const Desc = styled.h2`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 160%;
  color: #2b3252;

  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

const Button = styled.button`
  width: 130px;
  height: 45px;
  border: 1px solid #ef5555;
  border-radius: 8px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 160%;
  color: #ef5555;
  cursor: pointer;
  background-color: transparent;
  background-image: url(${Arrow});
  background-repeat: no-repeat;
  background-position: right 14px center;
  background-size: 12px;

  @media only screen and (max-width: 768px) {
    width: 90px;
    height: 30px;
    font-size: 9px;
    background-size: 8px;
    background-position: right 10px center;
  }

  &:hover {
    color: white;
    background-color: #ef5555;
    background-image: url(${WhiteArrow});
  }
`;

const About = () => {
  return (
    <Section id="about">
      <Container>
        <Left>
          <AboutImg src={AboutBg} />
        </Left>
        <Right>
          <Title>About Company</Title>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            <br /> sed do eiusmod tempor incididunt ut labore et dolore
            <br /> magna aliqua. Ut enim ad minim veniam, quis nostrud
            <br />
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            <br />
            consequat. Duis aute irure dolor in reprehenderit in
            <br /> voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            <br />
            Excepteur sint occaecat cupidatat non proident, sunt in
            <br /> culpa qui officia deserunt mollit anim id est laborum.
          </Desc>
          <Button>See More</Button>
        </Right>
      </Container>
    </Section>
  );
};

export default About;
