import React from "react";
import { Link } from "react-router-dom";
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';

import "./Leftbar.css";

const Leftbar = () => {
	return (
		<section className="leftbar">
			<div className="header">
				<h3 className="heading">Menu</h3>
			</div>
			<div className="links">
				<Link to="/">Home <KeyboardArrowRightOutlinedIcon /></Link>
				<Link to="/">Messages <KeyboardArrowRightOutlinedIcon /></Link>
				<Link to="/">Notifications <KeyboardArrowRightOutlinedIcon /></Link>
				<Link to="/">Profile <KeyboardArrowRightOutlinedIcon /></Link>
			</div>
		</section>
	);
};

export default Leftbar;
