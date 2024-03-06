import React from "react";
import styled from "styled-components";
import CodeBlock from "./CodeBlock";
import { MDXProvider } from "@mdx-js/react";
import { Box } from "@chakra-ui/react";
import Header from "./Header";
import Footer from "./Footer";

interface ArticleProps {
  children: React.ReactNode;
}

const conponents = {
  code: CodeBlock,
};

const PostLayout: React.FC<ArticleProps> = ({ children }: ArticleProps) => {
  return (
    <MDXProvider components={conponents as any}>
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

const Section = styled.section`
  padding: 1rem;
`;

export default PostLayout;
