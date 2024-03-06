import { extendTheme } from "@chakra-ui/react";
import global from "./global";

const theme = {
  styles: { global },
  breakpoint: {
    sm: "320px", // 320 ~ 768px
    md: "768px", // 768 ~ 960px
    lg: "960px", // 960 ~ 1200px
    xl: "1200px", // 1200 ~
  },
};

export default extendTheme(theme);
