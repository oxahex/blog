import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";

interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <MainStyle>{children}</MainStyle>
      <Footer />
    </>
  );
};

const MainStyle = styled.main`
  display: flex;
  flex-direction: row;
  font-size: 1rem;
`;

export default Layout;