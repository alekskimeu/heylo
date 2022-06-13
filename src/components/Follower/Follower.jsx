import React from "react";
import { Link } from "react-router-dom";
import "./Follower.css";

const Follower = ({ image, name, username }) => {
	return (
		<Link to="/profile" className="follower">
			<img src={image} alt={name} />
			<div className="user-info">
				<h4 className="name">{name}</h4>
				<h5 className="username">@{username}</h5>
			</div>
		</Link>
	);
};

export default Follower;
