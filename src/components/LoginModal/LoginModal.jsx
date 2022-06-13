import React from "react";
import LoginIcon from "@mui/icons-material/Login";

import Modal from "../Modal/Modal";
import FormInput from "../FormInput/FormInput";
import AppButton from "../AppButton/AppButton";

const LoginModal = ({ show, handleClose, showModal, title }) => {
	return (
		<Modal
			show={show}
			title={title}
			handleClose={handleClose}
			showModal={showModal}
		>
			<form>
				<FormInput type="text" label="Email" placeholder="Email" />
				<FormInput type="password" label="Password" placeholder="Password" />
				<AppButton title={title} type="submit" icon={<LoginIcon />} />
			</form>
		</Modal>
	);
};

export default LoginModal;
