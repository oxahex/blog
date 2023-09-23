import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  breakPoints: {
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
  },
});

export default theme;