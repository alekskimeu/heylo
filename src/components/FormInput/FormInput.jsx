import React from "react";
import "./FormInput.css";

const FormInput = ({ type, placeholder, label, icon, multiple, value }) => {
	return (
		<div className="input-container">
			<label>{label}</label>
			<input
				type={type}
				placeholder={placeholder}
				className="input"
				value={value}
				multiple={multiple}
			/>
		</div>
	);
};

export default FormInput;
