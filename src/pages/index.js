import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";

const pageStyles = {
	color: "#232129",
	padding: 96,
	fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const IndexPage = () => {
	const links = useStaticQuery(
		graphql`
			query MyQuery {
				allMarkdownRemark {
					nodes {
						frontmatter {
							date
							slug
							title
						}
					}
				}
			}
		`
	);
	console.log(links)
	return (
		<main style={pageStyles}>
			<h1>Ashkan's Blog</h1>
			<h2>I love computers, and I love cars.</h2>
			<p>This is a very ugly hero. No CSS, as promised...</p>
			<hr />
			<h2>Here are some links:</h2>
			{/* <a href="/blog/my-first-blog-post">make this dynamic</a> */}
			{links.allMarkdownRemark.nodes.map(page => (
				<p><a href={'/blog' + page.frontmatter.slug}>{page.frontmatter.title}</a></p>
			))}
		</main>
	)
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
