import React from "react";
import { WrapPageElementNodeArgs } from "gatsby";
import Root from "./src/Root";

export const wrapPageElement = ({ element }: WrapPageElementNodeArgs) => {
  console.log("???" + element);
  return <Root>{element}</Root>;
};