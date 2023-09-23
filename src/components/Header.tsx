import { Box, Text } from "@chakra-ui/react";
import React from "react";

const Header = () => {
  return (
    <Box as="header" display="flex" padding="1rem" overflow="hidden">
      <Text as="h1">Archive 10</Text>
    </Box>
  );
};

export default Header;