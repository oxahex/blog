import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Box } from "@chakra-ui/react";
import Navigation from "./Navigation";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <Navigation currentTag={"all-post"} />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        width="100%"
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
