import React from "react";
import Root from "./src/Root";
import { WrapPageElementBrowserArgs } from "gatsby";

export const wrapPageElement = ({ element }: WrapPageElementBrowserArgs) => {
  return <Root>{element}</Root>;
};