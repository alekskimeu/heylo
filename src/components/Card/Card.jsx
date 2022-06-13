import React, { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";

import CommentModal from "../CommentModal/CommentModal";
import "./Card.css";
import { Link } from "react-router-dom";

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
	const [show, setShow] = useState(false);

	const handleClose = () => {
		setShow(false);
	};

	const showModal = () => {
		setShow(true);
	};
	return (
		<div className="card">
			<div className="media">
				<img src={media} alt={name} className="feed-media" />
			</div>
			<div className="card-user">
				<Link to="/profile" className="user-info">
					<img src={profilePhoto} alt={name} className="profile-photo" />
					<div>
						<h3 className="name">{name}</h3>
						<h4 className="username">{username}</h4>
					</div>
				</Link>
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
					<ChatBubbleIcon onClick={showModal} /> {comments}
				</div>
			</div>
			<CommentModal
				show={show}
				handleClose={handleClose}
				title="Comment on post"
			/>
		</div>
	);
};

export default Card;
