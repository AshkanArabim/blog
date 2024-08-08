/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
	siteMetadata: {
		title: `blog`,
		siteUrl: `https://www.yourdomain.tld`,
	},
	plugins: [
		"gatsby-plugin-mdx",
		'gatsby-plugin-postcss',
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `content`,
				path: `${__dirname}/src/content`,
			},
		},
		"gatsby-transformer-remark",
		"gatsby-plugin-netlify-redirect",
	],
};
