import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/seo";
import { graphql, HeadFC } from "gatsby";

interface PostPageProps {
  data: Queries.PostPageQuery;
  children: React.ReactNode;
}

const PostPageTemplate = ({ data, children }: PostPageProps) => {
  const post = data.mdx;

  if (!post?.frontmatter || !post.body) return null;

  return (
    <Layout>
      <article>
        <header>
          <h1>{post.frontmatter.title}</h1>
          <p>{post.frontmatter.createdAt}</p>
        </header>
        <section itemProp="articleBody">{children}</section>
      </article>
    </Layout>
  );
};

export const query = graphql`
  query PostPage($id: String!) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        createdAt(formatString: "MMMM DD, YYYY")
        slug
        title
      }
      body
      excerpt
      internal {
        contentFilePath
      }
    }
  }
`;

export const Head: HeadFC<Queries.PostPageQuery> = ({ data }) => (
  <SEO
    title={data?.mdx?.frontmatter?.title || undefined}
    description={data?.mdx?.excerpt || undefined}
  />
);

export default PostPageTemplate;