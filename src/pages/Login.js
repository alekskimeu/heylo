import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Formik } from "formik";
import * as Yup from "yup";

import LoginIcon from "@mui/icons-material/Login";

import "../styles/form.css";

const validationSchema = Yup.object().shape({
	email: Yup.string().required().email().label("Email"),
	password: Yup.string().required().min(6).label("Password"),
});

const Login = () => {
	const [user, setUser] = useState(null);

	const loginUser = async (values) => {
		axios
			.post("http://localhost:9000/api/users/login", values)
			.then((response) => setUser(response));
	};
	return (
		<div className="form-container">
			<div className="form">
				<Formik
					initialValues={{ email: "", password: "" }}
					onSubmit={(values) => loginUser(values)}
					validationSchema={validationSchema}
				>
					{({ handleChange, handleSubmit, errors }) => (
						<>
							<div className="header">
								<h3 className="heading">Login</h3>
							</div>

							<div className="input-container">
								<label>Email</label>

								<input
									type="email"
									placeholder="Email"
									name="email"
									required
									className="input"
									onChange={handleChange("email")}
								/>
								<p className="errors">{errors.email}</p>
							</div>
							<div className="input-container">
								<label>Password</label>
								<input
									type="password"
									placeholder="Password"
									name="password"
									required
									className="input"
									onChange={handleChange("password")}
								/>
								<p className="errors">{errors.password}</p>
							</div>
							<button type="submit" className="button" onClick={handleSubmit}>
								Login
								<LoginIcon />
							</button>
							<p className="text">
								Don't have an account?
								<Link to="/register">Register</Link>
							</p>
						</>
					)}
				</Formik>
			</div>
		</div>
	);
};

export default Login;
