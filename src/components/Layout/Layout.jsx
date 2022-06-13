import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import Header from "../Header/Header";
import Leftbar from "../Leftbar/Leftbar";
import Rightbar from "../Rightbar/Rightbar";

import "./Layout.css";

const Layout = ({ children }) => {
	const [mobileMenu, setMobileMenu] = useState(true);

	return (
		<div className="wrapper">
			<div className="wrap">
				<Header />
				<div className="main">
					<div className="menu">
						{!mobileMenu ? (
							<CloseIcon onClick={() => setMobileMenu(!mobileMenu)} />
						) : (
							<MenuIcon onClick={() => setMobileMenu(!mobileMenu)} />
						)}
					</div>
					<div className="container">
						<Leftbar mobileMenu={mobileMenu} />
						<div className="content">{children}</div>
						<Rightbar />
					</div>
				</div>
			</div>
			{/* <Footer /> */}
		</div>
	);
};

export default Layout;
