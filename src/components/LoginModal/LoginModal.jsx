import React, { useState } from "react";
import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
} from "@firebase/auth";
import { auth } from "../../firebase-config";

import LoginIcon from "@mui/icons-material/Login";

import Modal from "../Modal/Modal";
import FormInput from "../FormInput/FormInput";
import AppButton from "../AppButton/AppButton";

const LoginModal = ({ show, handleClose, showModal, title }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const register = async () => {
		const user = await createUserWithEmailAndPassword(auth, email, password);
	};
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
