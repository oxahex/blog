import React from "react";
import CodeBlock from "./CodeBlock";
import { MDXProvider } from "@mdx-js/react";
import {
  Box,
  BoxProps,
  Card,
  ComponentDefaultProps,
  Flex,
  Heading,
  HeadingProps,
  Text,
  TextProps,
  Wrap,
} from "@chakra-ui/react";
import Header from "./Header";
import Footer from "./Footer";

interface ArticleProps {
  children: React.ReactNode;
}

const components = {
  h1: (props: HeadingProps) => (
    <Heading
      as="h1"
      fontSize="1.4rem"
      padding={{ base: "1rem 0" }}
      {...props}
    />
  ),
  h2: (props: HeadingProps) => (
    <Heading
      as="h2"
      fontSize="1.2rem"
      padding={{ base: "1rem 0 0.8rem 0" }}
      {...props}
    />
  ),
  h3: (props: HeadingProps) => (
    <Heading
      as="h3"
      fontSize="1rem"
      padding={{ base: "1rem 0 0.5rem 0" }}
      {...props}
    />
  ),
  h4: (props: HeadingProps) => (
    <Heading
      as="h4"
      fontSize="0.8rem"
      padding={{ base: "1rem 0 0.5rem 0" }}
      {...props}
    />
  ),
  p: (props: TextProps) => (
    <Text
      as="p"
      fontSize="0.825rem"
      lineHeight="1.8"
      padding={{ base: "0 0 0.5rem 0" }}
      {...props}
    />
  ),
  ol: (props: BoxProps) => (
    <Box
      as="ol"
      fontSize="0.825rem"
      listStype="inside"
      padding={{ base: "0 0 0.5rem 0" }}
      {...props}
    />
  ),
  ul: (props: BoxProps) => (
    <Box
      as="ul"
      fontSize="0.825rem"
      listStype="inside"
      padding={{ base: "0 0 0.5rem 0" }}
      {...props}
    />
  ),
  li: (props: BoxProps) => (
    <Box
      as="li"
      fontSize="0.8rem"
      sx={{
        listStyleType: "none",
        _before: {
          content: '"•"',
          fontSize: "0.8rem",
          width: "1rem",
          display: "inline-block",
        },
      }}
      {...props}
    />
  ),
  code: CodeBlock,
  blockquote: (props: ComponentDefaultProps) => (
    <Card
      as="blockquote"
      margin={{ base: "0.5rem 0" }}
      padding={{ base: "1rem" }}
      color="#5d5d5d"
      {...props}
    />
  ),
  hr: (props: ComponentDefaultProps) => (
    <Box as="hr" margin={{ base: "1rem 0" }} {...props} />
  ),
};

const PostLayout: React.FC<ArticleProps> = ({ children }: ArticleProps) => {
  return (
    <MDXProvider components={components as any}>
      <Header />
      <Box
        as="main"
        maxWidth={{ base: "800px", xl: "1100px" }}
        style={{
          width: "100%",
          margin: "50px auto",
          padding: "20px",
          wordBreak: "keep-all",
          overflowWrap: "break-word",
          lineHeight: "1.7",
          letterSpacing: "-0.04px",
        }}
      >
        {children}
      </Box>
      <Footer />
    </MDXProvider>
  );
};

export default PostLayout;
