const { createRemoteFileNode } = require(`gatsby-source-filesystem`);
const path = require("path")

exports.onCreateNode = async ({ node, actions, getNode, store, cache }) => {
  const { createNode, createNodeField } = actions;

  if (node.internal.type !== null && node.internal.type === "StrapiCarrossel") {
    for (const image of node.imagensDoCarrossel) {
      const fileNode = await createRemoteFileNode({
        url: "http://localhost:1337" + image.url,
        store,
        cache,
        createNode,
        createNodeId: (id) => image.id.toString(),
      });

      if (fileNode) {
        image.localFile___NODE = fileNode.id;
      }
    }
  }
  if (node.internal.type !== null && node.internal.type === "StrapiPecas") {
    for (const image of node.imagens) {
      const fileNode = await createRemoteFileNode({
        url: "http://localhost:1337" + image.url,
        store,
        cache,
        createNode,
        createNodeId: (id) => image.id.toString(),
      });

      if (fileNode) {
        image.localFile___NODE = fileNode.id;
      }
    }
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const { data: { allStrapiPecas: { nodes } } } = await graphql(`
    query {
      allStrapiPecas {
        nodes {
          strapiId
        }
      }
    }
  `)

  nodes.forEach((node) => {
    createPage({
      path: '/catalogo/' + node.strapiId,
      component: path.resolve("./src/templates/ProductPage.jsx"),
      context: {
        slug: node.strapiId
      },
    })
  })
};
