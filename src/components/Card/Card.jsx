import React, { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";

import CommentModal from "../CommentModal/CommentModal";
import "./Card.css";
import { Link } from "react-router-dom";
import { db } from "../../firebase-config";
import { deleteDoc, doc } from "firebase/firestore";

const Card = ({
	id, 
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

	const deletePost = async (id) => {
		const postDoc = doc(db, "posts", id);
		await deleteDoc(postDoc);
	};
	return (
		<Link to="/post" className="card">
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

				<div className="card-cta">
					<button type="button" className="edit">
						Edit
					</button>
					<button
						type="button"
						className="delete"
						onClick={() => deletePost(id)}
					>
						Delete
					</button>
				</div>
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
		</Link>
	);
};

export default Card;
