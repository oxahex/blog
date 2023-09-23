import React from "react";
import { WrapPageElementBrowserArgs } from "gatsby";
import Root from "./src/Root";

export const wrapPageElement = ({ element }: WrapPageElementBrowserArgs) => {
  return <Root>{element}</Root>;
};