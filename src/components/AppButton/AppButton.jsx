import React from "react";
import "./AppButton.css";

const AppButton = ({ icon, title, type }) => {
	return (
		<button type={type} className="button">
			{title}
			{icon}
		</button>
	);
};

export default AppButton;
