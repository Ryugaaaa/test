import { styled } from "styled-components";
import BackgroundImg from "./../../img/BackgroundImage.jpg";

const Section = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  max-width: 1700px;
  width: 100%;
  height: 780px;
  display: flex;
  justify-content: center;
`;

const Bg = styled.img`
  width: 1700px;
  height: 780px;
  display: block;
`;

const Title = styled.h1`
  position: absolute;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 62px;
  line-height: 76px;
  text-transform: uppercase;
  color: white;
  bottom: 10px;
`;

const Hero = () => {
  return (
    <Section>
      <Container>
        <Bg src={BackgroundImg} />
        <Title>
          Company’s First <br />
          Service Title
        </Title>
      </Container>
    </Section>
  );
};

export default Hero;
