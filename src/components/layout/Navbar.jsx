import { styled } from "styled-components";
import logo from "./../../img/logo.png";
import icon from "./../../img/SearchIcon.png";
import Burger from "./Burger";

const Section = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
    position: fixed;
  }
`;

const Container = styled.div`
  max-width: 1420px;
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 80px;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;

  @media only screen and (max-width: 768px) {
    padding: 0 0 0 20px;
  }
`;

const Logo = styled.img`
  height: 68px;
  cursor: pointer;

  @media only screen and (max-width: 768px) {
    height: 50px;
  }
`;

const Text = styled.p`
  margin-left: 25px;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 22px;
  line-height: 27px;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const SearchItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Search = styled.input`
  width: 210px;
  height: 30px;
  padding: 10px;
  color: black;
  border: none;
  border-bottom: 1px solid lightgray;

  @media only screen and (max-width: 1200px) {
    width: 150px;
  }

  @media only screen and (max-width: 1100px) {
    display: none;
  }
`;

const Icon = styled.img`
  height: 16px;
  cursor: pointer;

  @media only screen and (max-width: 1100px) {
    height: 20px;
    padding: 0 10px 0 5px;
  }

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <LogoContainer>
          <a href="#hero">
            <Logo src={logo} />
          </a>
          <Text>
            Company <br />
            Name
          </Text>
        </LogoContainer>
        <Burger />
        <SearchItem>
          <Search placeholder="Search Keyword ..." />
          <Icon src={icon} />
        </SearchItem>
      </Container>
    </Section>
  );
};

export default Navbar;
