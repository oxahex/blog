import React from "react";
import { graphql, HeadFC, StaticQueryDocument } from "gatsby";
import SEO from "../components/seo";
import Layout from "../components/Layout";
import Navigation from "../components/Navigation";

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
  return (
    <Layout>
      <Navigation currentTag={pageContext.tag} />
      <div>{pageContext.tag}</div>
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

  console.log("??: " + pageContext);

  return <SEO title={`${title} ${currentTag}`} description={description} />;
};

export default TagPageTemplate;
