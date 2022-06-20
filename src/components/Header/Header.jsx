import React, { useState } from "react";
import { Link } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LogoutIcon from "@mui/icons-material/Logout";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import ExpandLessOutlinedIcon from "@mui/icons-material/ExpandLessOutlined";

import "./Header.css";

const Header = () => {
	const [user, setUser] = useState(false);
	const [dropdown, setDropdown] = useState(false);

	const toggleDropdown = () => {
		setDropdown(!dropdown);
	};

	const showHideDropdown = dropdown ? "dropdown show" : "dropdown";

	return (
		<>
			<header>
				<div className="container">
					<nav className="nav">
						<div className="brand">
							<Link to="/" className="logo">
								Heylo
							</Link>
						</div>
						<div className="search">
							<input type="search" placeholder="search feed" />
						</div>
						<div className="account">
							{user ? (
								<div className="profile-link">
									<div onClick={toggleDropdown} className="btn-link">
										<span>Alex Kimeu</span>{" "}
										{dropdown ? <ExpandLessOutlinedIcon /> : <ExpandMoreIcon />}
									</div>
									<div className={showHideDropdown}>
										<Link to="/profile" type="button" className="profile">
											<PermIdentityOutlinedIcon /> Profile
										</Link>
										<button type="button" className="logout">
											<LogoutIcon />
											Logout
										</button>
									</div>
								</div>
							) : (
								<div className="account-buttons">
									<Link to="/login" className="login">
										Login
									</Link>
									<Link to="/register" className="register">
										Register
									</Link>
								</div>
							)}
						</div>
					</nav>
				</div>
			</header>
		</>
	);
};

export default Header;
