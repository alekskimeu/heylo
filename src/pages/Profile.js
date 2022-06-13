import React, { useState } from "react";
import { Card, Layout } from "../components";

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
				<div className="top">
					<img src={image} alt="" />
					<div className="user-info">
						<h3 className="name">Alex Kimeu</h3>
						<h4 className="username">@sodapop</h4>
						<p className="bio">I create with cool people</p>
						<p className="posts">20 Posts</p>

						<div className="profile-cta">
							<button type="button" className="btn-edit" onClick={showModal}>
								Edit
							</button>
						</div>
					</div>
				</div>
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
