import { Box, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box
      as="footer"
      display="flex"
      flexDirection="column"
      padding="1rem"
      overflow="hidden"
    >
      <Text as="p">Everything begins with your stance. Remember.</Text>
      <Text as="p">©{new Date().getFullYear()} Archive 10</Text>
    </Box>
  );
};

export default Footer;