import * as React from "react";
import type { HeadFC } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/seo";
import { graphql, Link } from "gatsby";
import { Box } from "@chakra-ui/react";
import Navigation from "../components/Navigation";
import PostCard from "../components/PostCard";

interface IndexPageProps {
  data: Queries.IndexPageQuery;
  children: React.ReactNode;
}
const IndexPage: React.FC<IndexPageProps> = ({ data, children }) => {
  const posts = data.allMdx.nodes;

  // TODO: 포스트 카드 생성
  // TODO: 각 포스트 데이터 없으면 안보여주든가 오류 있음 분기처리 필요

  return (
    <Layout>
      <Navigation currentTag={undefined} />
      <Box
        as="ul"
        listStyleType="none"
        width="100%"
        margin={{ base: "1.5rem auto" }}
      >
        {posts.map((post) => {
          const postData = {
            id: post.id!,
            title: post.frontmatter?.title!,
            description: post.frontmatter?.description!,
            slug: post.frontmatter?.slug!,
            createdAt: post.frontmatter?.createdAt!,
            tags: post.frontmatter?.tags!,
          };
          return <PostCard {...postData} />;
        })}
      </Box>
    </Layout>
  );
};

export const query = graphql`
  query IndexPage {
    allMdx(sort: { frontmatter: { createdAt: DESC } }) {
      nodes {
        id
        frontmatter {
          title
          description
          author
          createdAt(formatString: "MMMM DD, YYYY")
          tags
          slug
        }
        excerpt
        internal {
          contentFilePath
        }
      }
    }
  }
`;

export default IndexPage;
export const Head: HeadFC<Queries.IndexPageQuery> = () => <SEO title="Home" />;
