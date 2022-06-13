import React from "react";
import SendIcon from "@mui/icons-material/Send";

import Modal from "../Modal/Modal";
import AppButton from "../AppButton/AppButton";
import FormTextArea from "../FormTextArea/FormTextArea";

const CommentModal = ({ show, handleClose, showModal, title }) => {
	return (
		<Modal
			show={show}
			title={title}
			handleClose={handleClose}
			showModal={showModal}
		>
			<form>
				<FormTextArea label="Comment" placeholder="Leave your comment" rows={5} />
				<AppButton title="Comment" type="submit" icon={<SendIcon />} />
			</form>
		</Modal>
	);
};

export default CommentModal;
