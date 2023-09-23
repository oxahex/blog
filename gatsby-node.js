const path = require("path");
const postPageTemplate = path.resolve(`./src/templates/PostPageTemplate.tsx`);

exports.onCreateWebpackConfig = ({ actions, plugins }) => {
  actions.setWebpackConfig({
    plugins: [plugins.provide({ React: "react" })],
  });
};

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  console.log("???");
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          frontmatter {
            title
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
    }
  `);

  // allTags: allMdx {
  //   group(field: { frontmatter: { tags: SELECT } }) {
  //     tag: fieldValue
  //     nodes {
  //       id
  //     }
  //   }
  // }

  // Tags Page
  // 나중에...
  // const tags = result.data.allTags.group;

  // Generate All Posts Page
  result.data.allMdx.nodes.forEach((node) => {
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