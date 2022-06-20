import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Formik } from "formik";
import * as Yup from "yup";

import SendIcon from "@mui/icons-material/Send";

import "../styles/form.css";
import { Layout } from "../components";

const validationSchema = Yup.object().shape({
	description: Yup.string().required().label("Description"),
});

const NewPost = () => {
	let navigate = useNavigate();

	// Submit post to the DB
	const submitPost = async (values) => {
		axios
			.post("http://localhost:9000/api/posts/", values)
			.then(() => navigate("/"));
	};

	return (
		<Layout>
			<div className="form">
				<Formik
					initialValues={{ media: [], description: "" }}
					onSubmit={(values) => submitPost(values)}
					validationSchema={validationSchema}
				>
					{({ handleChange, handleSubmit, errors }) => (
						<>
							<div className="header">
								<h3 className="heading">New post</h3>
							</div>

							<div className="input-container">
								{/* <label>Description</label> */}
								<textarea
									className="textarea"
									placeholder="Share your memories..."
									name="description"
									rows={2}
									onChange={handleChange("description")}
									required
								/>
								<p className="errors">{errors.description}</p>
							</div>
							<div className="input-container">
								<label>Media</label>
								<input
									type="file"
									label="Media"
									name="media"
									className="input"
									onChange={handleChange("media")}
									required
								/>
								<p className="errors">{errors.media}</p>
							</div>
							<button type="submit" className="button" onClick={handleSubmit}>
								Submit <SendIcon />
							</button>
						</>
					)}
				</Formik>
			</div>
		</Layout>
	);
};

export default NewPost;
