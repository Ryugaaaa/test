import { styled } from "styled-components";
import logo from "./../assets/img/logo.png";
import icon from "./../assets/img/SearchIcon.png";

const Section = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  max-width: 1420px;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 200px;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  height: 68px;
  cursor: pointer;
`;

const Text = styled.p`
  margin-left: 25px;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 22px;
  line-height: 27px;
`;

const List = styled.ul`
  display: flex;
  gap: 30px;
  list-style: none;
`;

const ListItem = styled.li`
  cursor: pointer;
  font-weight: 700;
  font-size: 18px;
`;

const SearchItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Search = styled.input`
  width: 210px;
  height: 30px;
  padding: 10px;
  color: black;
  border: none;
  border-bottom: 2px solid gray;
`;

const Icon = styled.img`
  height: 16px;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <LogoContainer>
          <Logo src={logo} />
          <Text>
            Company <br />
            Name
          </Text>
        </LogoContainer>
        <Links>
          <List>
            <ListItem className="home">Home</ListItem>
            <ListItem>Services</ListItem>
            <ListItem>Projects</ListItem>
            <ListItem>About</ListItem>
            <ListItem>Contact</ListItem>
          </List>
        </Links>
        <SearchItem>
          <Search placeholder="Search Keyword ..." />
          <Icon src={icon} />
        </SearchItem>
      </Container>
    </Section>
  );
};

export default Navbar;
