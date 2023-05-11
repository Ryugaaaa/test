import React, { useState } from "react";
import { styled } from "styled-components";
import NavbarList from "./NavbarList";

const StyledBurger = styled.div`
  width: 32px;
  height: 32px;
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 20;
  display: none;

  @media only screen and (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    position: fixed;
  }

  div {
    width: 32px;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? "#f1f1f1" : "#333")};
    border-radius: 10px;
    transform-origin: 1px;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const Burger = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <NavbarList open={open} />
    </>
  );
};

export default Burger;
