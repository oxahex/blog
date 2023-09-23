import React from "react";
import Header from "./Header";
import { Box } from "@chakra-ui/react";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <Box
        as="main"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        maxWidth={900}
        margin="auto"
      >
        {children}
      </Box>
      <Footer />
    </>
  );
};

export default Layout;