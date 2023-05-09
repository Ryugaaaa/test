import { styled } from "styled-components";
import BackgroundImg from "./../assets/img/BackgroundImage.jpg";

const Section = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  max-width: 1700px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Bg = styled.img`
  width: 1700px;
  height: 770px;
`;

const Hero = () => {
  return (
    <Section>
      <Container>
        <Bg src={BackgroundImg} />
      </Container>
    </Section>
  );
};

export default Hero;
