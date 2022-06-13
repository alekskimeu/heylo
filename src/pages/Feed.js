import React from "react";
import { Card, Layout } from "../components";
import image from "../assets/images/image.jpg";

const Feed = () => {
	return (
		<Layout>
			<div className="feed">
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

export default Feed;
