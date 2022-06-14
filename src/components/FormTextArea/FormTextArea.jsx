import React from "react";
import "./FormTextArea.css";

const FormTextArea = ({
	type,
	handleChange,
	placeholder,
	label,
	icon,
	rows,
}) => {
	return (
		<div className="input-container">
			<label>{label}</label>
			<textarea
				placeholder={placeholder}
				className="textarea"
				rows={rows}
				onChange={(e) => handleChange(e)}
			/>
		</div>
	);
};

export default FormTextArea;
