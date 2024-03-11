import React from "react";
import SEO from "../components/seo";
import { graphql, HeadFC, Link, StaticQueryDocument } from "gatsby";
import PostLayout from "../components/PostLayout";
import { Flex, Heading, Text } from "@chakra-ui/react";

interface PostPageProps {
  data: Queries.PostPageQuery;
  children: React.ReactNode;
}

const PostPageTemplate = ({ data, children }: PostPageProps) => {
  const post = data.mdx;

  if (!post?.frontmatter || !post.body) return null;

  return (
    <PostLayout>
      <Flex
        width="100%"
        flexDirection="column"
        alignItems="center"
        marginBottom="3rem"
      >
        <Heading as="h1" fontSize="1.2rem" fontWeight={900}>
          {post?.frontmatter.title}
        </Heading>
        <Flex direction="column" alignItems="center">
          <Text fontSize="0.825rem">{post?.frontmatter.createdAt}</Text>
          <Flex
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            columnGap="0.5rem"
            rowGap="0.2rem"
          >
            {post?.frontmatter.tags?.map((tag) => (
              <Link key={tag} to={`/tags/${tag}`}>
                <Text
                  fontSize="0.825rem"
                  fontWeight={600}
                  _hover={{ textDecoration: "underline" }}
                >
                  {tag}
                </Text>
              </Link>
            ))}
          </Flex>
        </Flex>
      </Flex>
      {children}
    </PostLayout>
  );
};

export const query = graphql`
  query PostPage($id: String!) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
        description
        tags
        slug
        createdAt(formatString: "MMMM DD, YYYY")
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
    description={data?.mdx?.frontmatter?.description || undefined}
  />
);

export default PostPageTemplate;
