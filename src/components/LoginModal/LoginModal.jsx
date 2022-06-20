import React, { useState } from "react";
import axios from "axios";

import LoginIcon from "@mui/icons-material/Login";

import Modal from "../Modal/Modal";
import FormInput from "../FormInput/FormInput";
import AppButton from "../AppButton/AppButton";

const LoginModal = ({ show, handleClose, showModal, title, login }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const registerUser = async () => {
		console.log(email);
		axios
			.post("http://localhost:5000/users/register", {
				email: email,
				password: password,
			})
			.then((response) => console.log(response));
	};

	const loginUser = async () => {};

	return (
		<Modal
			show={show}
			title={title}
			handleClose={handleClose}
			showModal={showModal}
		>
			<form onSubmit={login ? loginUser : registerUser}>
				<FormInput
					type="text"
					label="Email"
					placeholder="Email"
					name="email"
					onChange={(e) => setEmail(e.target.value)}
				/>
				<FormInput
					type="password"
					label="Password"
					placeholder="Password"
					name="password"
					onChange={(e) => setPassword(e.target.value)}
				/>
				<AppButton title={title} type="submit" icon={<LoginIcon />} />
			</form>
		</Modal>
	);
};

export default LoginModal;
