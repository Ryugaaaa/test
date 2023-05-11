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

    &:hover {
      color: #629bae;
    }
  }

  @media only screen and (max-width: 900px) {
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
        <ListItem>Home</ListItem>
        <ListItem>Services</ListItem>
        <ListItem>Projects</ListItem>
        <ListItem>About</ListItem>
        <ListItem>Contact</ListItem>
      </List>
    </Links>
  );
};

export default NavbarList;