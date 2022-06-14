import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase-config";

import SendIcon from "@mui/icons-material/Send";

import Modal from "../Modal/Modal";
import FormInput from "../FormInput/FormInput";
import AppButton from "../AppButton/AppButton";
import FormTextArea from "../FormTextArea/FormTextArea";

const FeedModal = ({ show, handleClose, showModal, title }) => {
	const [description, setDescription] = useState("");
	const [media, setMedia] = useState(null);

	const postsCollection = collection(db, "posts");

	// Submit post to the DB
	const createPost = async (e) => {
		e.preventDefault();
		await addDoc(postsCollection, { description: description, media: media });
		handleClose();
	};

	const handleChange = (e) => {
		setDescription(e.target.value);
	};

	return (
		<Modal
			show={show}
			title={title}
			handleClose={handleClose}
			showModal={showModal}
		>
			<form onSubmit={createPost}>
				<FormInput type="file" label="Media" />
				<FormTextArea
					label="Description"
					placeholder="Description"
					name="description"
					rows={5}
					handleChange={(e) => handleChange(e)}
				/>
				<AppButton title="Submit" type="submit" icon={<SendIcon />} />
			</form>
		</Modal>
	);
};

export default FeedModal;
