import React from "react";
import image from "../../assets/images/image.jpg";
import Follower from "../Follower/Follower";
import "./Rightbar.css";

const Rightbar = () => {
	return (
		<section className="rightbar">
			<div className="header">
				<h3 className="heading">Top Users</h3>
			</div>
			<div className="followers">
				<Follower username="aunga" name="Kevin Aunga" image={image} />
				<Follower username="aunga" name="Kevin Aunga" image={image} />
				<Follower username="aunga" name="Kevin Aunga" image={image} />
				<Follower username="aunga" name="Kevin Aunga" image={image} />
				<Follower username="aunga" name="Kevin Aunga" image={image} />
			</div>
		</section>
	);
};

export default Rightbar;
