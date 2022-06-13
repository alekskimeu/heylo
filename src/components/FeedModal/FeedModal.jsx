import React from "react";
import SendIcon from "@mui/icons-material/Send";

import Modal from "../Modal/Modal";
import FormInput from "../FormInput/FormInput";
import AppButton from "../AppButton/AppButton";
import FormTextArea from "../FormTextArea/FormTextArea";

const FeedModal = ({ show, handleClose, showModal, title }) => {
	return (
		<Modal
			show={show}
			title={title}
			handleClose={handleClose}
			showModal={showModal}
		>
			<form>
				<FormInput type="file" label="Media" />
				<FormTextArea label="Description" placeholder="Description" rows={5} />
				<AppButton title="Submit" type="submit" icon={<SendIcon />} />
			</form>
		</Modal>
	);
};

export default FeedModal;
