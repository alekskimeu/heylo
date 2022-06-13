import React, { useState } from "react";
import { Card, Layout, UserProfile } from "../components";

import image from "../assets/images/image.jpg";

import "../styles/profile.css";
import ProfileModal from "../components/ProfileModal/ProfileModal";

const Profile = () => {
	const [show, setShow] = useState(false);

	const handleClose = () => {
		setShow(false);
	};

	const showModal = () => {
		setShow(true);
	};
	return (
		<Layout>
			<section className="profile">
				<UserProfile showModal={showModal} image={image} />
				<div className="bottom">
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
			</section>
			<ProfileModal
				show={show}
				handleClose={handleClose}
				title="Update Profile"
			/>
		</Layout>
	);
};

export default Profile;
