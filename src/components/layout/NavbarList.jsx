import { styled } from "styled-components";

const Links = styled.div`
  display: flex;
  align-items: center;
`;

const List = styled.ul`
  display: flex;
  list-style: none;

  @media only screen and (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #202020;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: -3%;
    right: 0;
    height: 100vh;
    width: 100%;
    padding-top: 3rem;
    gap: 30px;
    align-items: center;
    justify-content: center;
  }
`;

const ListItem = styled.li`
  cursor: pointer;
  font-weight: 700;
  font-size: 20px;
  padding-left: 50px;

  @media only screen and (max-width: 768px) {
    font-size: 30px;
    color: lightblue;
  }

  &:hover {
    color: #629bae;
  }

  @media only screen and (max-width: 910px) {
    padding-left: 20px;
  }

  &:hover {
    color: lightgray;
  }
`;

const NavbarList = ({ open }) => {
  return (
    <Links>
      <List open={open}>
        <a href="#home">
          <ListItem>Home</ListItem>
        </a>
        <a href="#services">
          <ListItem>Services</ListItem>
        </a>
        <a href="#projects">
          <ListItem>Projects</ListItem>
        </a>
        <a href="#about">
          <ListItem>About</ListItem>
        </a>
        <a href="#contact">
          <ListItem>Contact</ListItem>
        </a>
      </List>
    </Links>
  );
};

export default NavbarList;
