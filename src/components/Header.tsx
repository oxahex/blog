import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Box } from "@chakra-ui/react";
import { Link } from "gatsby";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      as="header"
      overflow="hidden"
      position="sticky"
      top="0"
      display="flex"
      justifyContent="center"
      alignItems="center"
      fontSize="2rem"
      fontWeight={600}
      paddingLeft={5}
      paddingRight={5}
      zIndex="99"
      width="100%"
      height="100px"
    >
      <Link to={`/`} itemProp="url">
        Archive 10
      </Link>
    </Box>
  );
};

export default Header;
