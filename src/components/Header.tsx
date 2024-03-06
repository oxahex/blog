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
      paddingLeft={5}
      paddingRight={5}
      zIndex="99"
      alignItems="center"
      width="100%"
      height="80px"
    >
      <Link to={`/`} itemProp="url">
        <span>Archive 10</span>
      </Link>
    </Box>
  );
};

const PHeader = styled.header`
  margin: 2rem auto;
  max-width: 600px;
  height: 4rem;
  font-size: 2rem;
  font-weight: 900;
`;
export default Header;
