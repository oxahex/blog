import React from "react";
import { WrapPageElementNodeArgs } from "gatsby";
import Root from "./src/Root";

export const wrapPageElement = ({ element }: WrapPageElementNodeArgs) => {
  return <Root>{element}</Root>;
};