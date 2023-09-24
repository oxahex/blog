import React from "react";
import styled from "styled-components";

interface ArticleProps {
  children: React.ReactNode;
}

const Article: React.FC<ArticleProps> = ({ children }) => {
  return <Section itemProp="articleBody">{children}</Section>;
};

const Section = styled.section`
  padding: 1rem;
`;

export default Article;