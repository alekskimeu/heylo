import React from "react";
import "./AppButton.css";

const AppButton = ({ icon, title, type, onClick }) => {
	return (
		<button type={type} className="button" onClick={onClick}>
			{title}
			{icon}
		</button>
	);
};

export default AppButton;
