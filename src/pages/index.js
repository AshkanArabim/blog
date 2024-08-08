import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";

const pageStyles = {
	color: "#232129",
	padding: 96,
	fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const customLinkStyles = {
	
}

const blogNameStyles = {
	borderBottom: "1px solid black"
}

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
		<main className="flex">
			<div>
				{/* empty space on left side */}
				<div className="border-b-4 pt-20 pl-20 border-black w-32">
					{/* top left */}
					{/* invisible character to take up vertical space */}
					<h1 className="text-6xl">ㅤ</h1> 
				</div>
				{/* bottom left is empty */}
			</div>
			<div>
				{/* main content */}
				<div className="border-b-4 border-l-4 pt-20 border-black">
					{/* top right */}
					<h1 className="text-6xl">When <a href="https://x.com/AshkanArabim">X (Twitter)</a> is too short</h1>
				</div>
				<div>
					{/* bottom right */}
					{/* <a href="/blog/my-first-blog-post">make this dynamic</a> */}
					{links.allMarkdownRemark.nodes.map(page => (
						<div className="align-middle">
							<span className="bg-red-500 w-4 h-1">sdf</span>
							<p className="border-l-4 border-black"><a href={'/blog' + page.frontmatter.slug}>{page.frontmatter.title}</a></p>
						</div>
					))}
				</div>
			</div>
		</main>
	)
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
