import React, { useState } from "react";
import { Link } from "react-router-dom";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";

import "./Leftbar.css";
import FeedModal from "../FeedModal/FeedModal";

const Leftbar = () => {
	const [show, setShow] = useState(false);

	const handleClose = () => {
		setShow(false);
	};

	const showModal = () => {
		setShow(true);
	};
	return (
		<section className="leftbar">
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
			<FeedModal show={show} handleClose={handleClose} title="Add Post" />
		</section>
	);
};

export default Leftbar;
