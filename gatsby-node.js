const path = require("path");
const postPageTemplate = path.resolve(`./src/templates/PostPageTemplate.tsx`);
const tagPageTemplate = path.resolve(`./src/templates/TagPageTemplate.tsx`);

exports.onCreateWebpackConfig = ({ actions, plugins }) => {
  actions.setWebpackConfig({
    plugins: [plugins.provide({ React: "react" })],
  });
};

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  console.log("???");
  const result = await graphql(`
    query {
      posts: allMdx {
        nodes {
          frontmatter {
            title
            description
            author
            createdAt
            tags
            slug
          }
          id
          body
          internal {
            contentFilePath
          }
        }
      }

      tags: allMdx {
        group(field: { frontmatter: { tags: SELECT } }) {
          tag: fieldValue
          nodes {
            id
          }
        }
      }
    }
  `);

  // Tags Page
  const PAGE_SIZE = 10;
  const tags = result.data.tags.group;

  tags.forEach(({ tag, nodes }) => {
    console.log("tagName: " + tag);
    const pageCount = Math.ceil(nodes.length / PAGE_SIZE);

    Array.from({ length: pageCount }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/tags/${tag}` : `/tags/${tag}/${i + 1}`,
        component: tagPageTemplate,
        context: {
          limit: PAGE_SIZE,
          skip: i * PAGE_SIZE,
          pageCount,
          currentPage: i + 1,
          tag,
        },
      });
    });
  });

  // Generate All Posts Page
  result.data.posts.nodes.forEach((node) => {
    const path = `/posts/${node.frontmatter.slug}`;
    console.log("node : " + node.frontmatter.title);
    console.log("path: " + node.frontmatter?.slug + ": " + path);

    createPage({
      path,
      component: `${postPageTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      context: {
        id: node.id,
        slug: node.frontmatter.slug,
        tags: node.frontmatter.tags,
      },
    });
  });
};
