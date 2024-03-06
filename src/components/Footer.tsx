import React from "react";
import { Center, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Center
      as="footer"
      overflow="hidden"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      width="100%"
      height={200}
      fontSize={12}
      fontWeight={600}
    >
      <Text as="p">Everything Begins with Your Stance.</Text>
      <Text as="p">Remember.</Text>
    </Center>
  );
};

export default Footer;
