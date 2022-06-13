import React from "react";
import "./UserProfile.css";

const UserProfile = ({ image, showModal }) => {
	return (
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
	);
};

export default UserProfile;
