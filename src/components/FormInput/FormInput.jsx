import React from "react";
import "./FormInput.css";

const FormInput = ({ type, placeholder, label, icon }) => {
	return (
		<div className="input-container">
			<label>{label}</label>
			<input type={type} placeholder={placeholder} className="input" />
		</div>
	);
};

export default FormInput;
