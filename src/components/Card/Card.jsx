import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import "./Card.css";

const Card = ({
	comments,
	date,
	description,
	likes,
	media,
	name,
	profilePhoto,
	username,
}) => {
	return (
		<div className="card">
			<img src={media} alt={name} className="feed-media" />
			<div className="card-user">
				<div className="user-info">
					<img src={profilePhoto} alt={name} className="profile-photo" />
					<div>
						<h3 className="name">{name}</h3>
						<h4 className="username">{username}</h4>
					</div>
				</div>
				<small className="date">{date}</small>
			</div>
			<div className="card-body">
				<p className="description">{description}</p>
			</div>
			<div className="card-footer">
				<div className="likes">
					<FavoriteIcon />
					{likes}
				</div>
				<div className="comments">
					<ChatBubbleIcon /> {comments}
				</div>
			</div>
		</div>
	);
};

export default Card;
