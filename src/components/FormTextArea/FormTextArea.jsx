import React from "react";
import "./FormTextArea.css";

const FormTextArea = ({ type, placeholder, label, icon, rows }) => {
	return (
		<div className="input-container">
			<label>{label}</label>
			<textarea placeholder={placeholder} className="textarea" rows={rows} />
		</div>
	);
};

export default FormTextArea;
