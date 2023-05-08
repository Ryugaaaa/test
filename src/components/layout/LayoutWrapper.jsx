import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { styled } from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const LayoutWrapper = ({ children }) => {
  return (
    <Container>
      <Navbar />
      {children}
      <Footer />
    </Container>
  );
};

export default LayoutWrapper;
