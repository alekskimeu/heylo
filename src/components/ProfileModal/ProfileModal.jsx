import React from "react";
import SendIcon from "@mui/icons-material/Send";

import Modal from "../Modal/Modal";
import FormInput from "../FormInput/FormInput";
import AppButton from "../AppButton/AppButton";
import FormTextArea from "../FormTextArea/FormTextArea";

const ProfileModal = ({ show, handleClose, showModal, title }) => {
	return (
		<Modal
			show={show}
			title={title}
			handleClose={handleClose}
			showModal={showModal}
		>
			<form>
				<FormInput type="text" label="Name"  placeholder="Name" />
				<FormInput type="text" label="Username"  placeholder="Username" />
				<FormTextArea label="Bio" placeholder="Bio" rows={3} />
				<FormInput type="file" label="Media" />
				<AppButton title="Update" type="submit" icon={<SendIcon />} />
			</form>
		</Modal>
	);
};

export default ProfileModal;
