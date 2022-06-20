import React, { useState } from "react";
import { Card, Layout } from "../components";
import image from "../assets/images/image.jpg";

import "../styles/feed.css";

const Feed = () => {
	const [posts, setPosts] = useState([]);

	// TODO:: Fetch posts from backend on componentDidMount

	return (
		<Layout>
			<div className="feed">
				{posts.map(({ id, description }) => (
					<Card
						key={id}
						username="alekskimeu"
						name="Alex Kimeu"
						media={image}
						description={description}
						id={id}
						comments={10}
						likes={20}
						profilePhoto={image}
						date="20th, Jun 2022"
					/>
				))}
			</div>
		</Layout>
	);
};

export default Feed;
