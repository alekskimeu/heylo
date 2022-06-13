import React, { useState } from "react";
import { Link } from "react-router-dom";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";

import FeedModal from "../FeedModal/FeedModal";

import image from "../../assets/images/image.jpg";

import "./Leftbar.css";

const Leftbar = ({ mobileMenu }) => {
	const [show, setShow] = useState(false);

	const handleClose = () => {
		setShow(false);
	};

	const showModal = () => {
		setShow(true);
	};

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
				<Link to="/" onClick={showModal}>
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
			</Link>
			<FeedModal show={show} handleClose={handleClose} title="Add Post" />
		</section>
	);
};

export default Leftbar;
