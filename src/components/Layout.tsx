import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import styled, { createGlobalStyle } from "styled-components";

interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

const Main = styled.main`
  margin: 2rem auto;
  max-width: 600px;
`;

export default Layout;