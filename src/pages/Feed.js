import React, { useEffect, useState } from "react";
import { db } from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { Card, Layout } from "../components";
import image from "../assets/images/image.jpg";

import "../styles/feed.css";

const Feed = () => {
	const [posts, setPosts] = useState([]);

	const postsCollection = collection(db, "posts");

	// Fetch posts from Firestore
	useEffect(() => {
		const fetchPosts = async () => {
			const data = await getDocs(postsCollection);
			setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
		};
		fetchPosts();
	}, [postsCollection]);

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
