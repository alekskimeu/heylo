import React from "react";
import image from "../assets/images/image.jpg";

import { Card, Layout } from "../components";

const Post = () => {
	return (
		<Layout>
			<div className="post">
				<Card
					username="alekskimeu"
					name="Alex Kimeu"
					media={image}
					description="The world breaks everyone & afterwards, many are strong at the broken places."
					comments={10}
					likes={20}
					profilePhoto={image}
					date="20th, Jun 2022"
				/>
			</div>
		</Layout>
	);
};

export default Post;
