import React from "react";
import { Box, ChakraProvider } from "@chakra-ui/react";
import theme from "./style/theme";

interface RootProps {
  children: React.ReactNode;
}

const Root: React.FC<RootProps> = ({ children }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

export default Root;
