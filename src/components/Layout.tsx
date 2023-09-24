import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";
import GlobalStyles from "../style/theme";

interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

const Main = styled.main`
  margin: 2rem auto;
  max-width: 600px;
  font-size: 1rem;
  letter-spacing: -0.25px;
  line-height: 1.7rem;
  font-family: .AppleSystemUIFont, serif;
`;

export default Layout;