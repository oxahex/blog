import React from "react";
import SEO from "../components/seo";
import { graphql, HeadFC } from "gatsby";
import PostLayout from "../components/PostLayout";

interface PostPageProps {
  data: Queries.PostPageQuery;
  children: React.ReactNode;
}

const PostPageTemplate = ({ data, children }: PostPageProps) => {
  const post = data.mdx;

  if (!post?.frontmatter || !post.body) return null;

  return <PostLayout>{children}</PostLayout>;
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
      tableOfContents
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
