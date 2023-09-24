import React from "react";
import Root from "./src/Root";
import { WrapPageElementBrowserArgs } from "gatsby";

export const wrapPageElement = ({ element }: WrapPageElementBrowserArgs) => {
  console.log("gatsby-browser" + element);
  return <Root>{element}</Root>;
};