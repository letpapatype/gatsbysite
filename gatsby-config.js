module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
    title: `My Blog Site`
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    /* routing to folders for page layout */
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }  
    },
    "gatsby-plugin-mdx",
  ],
}
