import React from "react";
import { graphql, HeadFC, Link, StaticQueryDocument } from "gatsby";
import SEO from "../components/seo";
import Layout from "../components/Layout";
import Navigation from "../components/Navigation";
import { Box } from "@chakra-ui/react";
import PostCard from "../components/PostCard";

interface TagPageProps {
  data: Queries.PostByTagQueryQuery;
  pageContext: {
    limit: number;
    skip: number;
    pageCount: number;
    currentPage: number;
    tag: string;
  };
}

const TagPageTemplate = ({ data, pageContext }: TagPageProps) => {
  const posts = data.allMdx.nodes;

  return (
    <Layout>
      <Navigation currentTag={pageContext.tag} />
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
          return <PostCard key={postData.id} {...postData} />;
        })}
      </Box>
    </Layout>
  );
};

export const query = graphql`
  query PostByTagQuery($tag: String!, $limit: Int, $skip: Int) {
    allMdx(
      sort: { frontmatter: { createdAt: DESC } }
      filter: { frontmatter: { tags: { in: [$tag] } } }
      limit: $limit
      skip: $skip
    ) {
      totalCount
      nodes {
        id
        frontmatter {
          title
          description
          slug
          tags
          createdAt(formatString: "MMMM DD, YYYY")
        }
      }
      pageInfo {
        currentPage
        pageCount
      }
    }
  }
`;

export const Head: HeadFC<
  Queries.PostByTagQueryQuery,
  TagPageProps["pageContext"]
> = ({ data, pageContext }) => {
  const title = "Archive 10";
  const currentTag = pageContext.tag;
  const description = "기술 블로그";

  return <SEO title={`${title} ${currentTag}`} description={description} />;
};

export default TagPageTemplate;
