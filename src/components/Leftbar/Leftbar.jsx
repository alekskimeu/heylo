import React, { useState } from "react";
import { Link } from "react-router-dom";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";

import { MoreHoriz } from "@mui/icons-material";

import image from "../../assets/images/image.jpg";

import "./Leftbar.css";

const Leftbar = ({ mobileMenu }) => {
	const showHideMobileMenu = mobileMenu ? "leftbar" : "leftbar show";

	return (
		<section className={showHideMobileMenu}>
			<div className="header">
				<h3 className="heading">Menu</h3>
			</div>
			<div className="links">
				<Link to="/">
					Home <KeyboardArrowRightOutlinedIcon />
				</Link>
				<Link to="/">
					Messages <KeyboardArrowRightOutlinedIcon />
				</Link>
				<Link to="/">
					Notifications <KeyboardArrowRightOutlinedIcon />
				</Link>
				<Link to="/new-post">
					New Post <KeyboardArrowRightOutlinedIcon />
				</Link>

				<Link to="/profile">
					Profile <KeyboardArrowRightOutlinedIcon />
				</Link>
			</div>
			<Link to="/profile" className="user-profile">
				<div className="image">
					<img src={image} alt="Alex Kimeu" className="profile-image" />
				</div>
				<div className="user-info">
					<h3 className="name">Alex Kimeu</h3>
					<h4 className="username">@sodapop</h4>
				</div>
				<MoreHoriz />
			</Link>
		</section>
	);
};

export default Leftbar;
