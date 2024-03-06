import * as React from "react";
import type { HeadFC } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/seo";
import { graphql, Link } from "gatsby";
import { Box } from "@chakra-ui/react";

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
      <Box as="ul" listStyleType="none" width="100%">
        {posts.map((post) => {
          return (
            <li id={post.id}>
              <section>
                <header>
                  <h3>
                    <Link to={`/posts/${post.frontmatter.slug}`} itemProp="url">
                      <span>{post.frontmatter.title}</span>
                    </Link>
                  </h3>
                  <small>{post.frontmatter.createdAt}</small>
                </header>
                <p itemProp="description">{post.frontmatter.description}</p>
              </section>
            </li>
          );
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
