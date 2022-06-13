import React from "react";
import Header from "../Header/Header";
import Leftbar from "../Leftbar/Leftbar";
import Rightbar from "../Rightbar/Rightbar";

import "./Layout.css";

const Layout = ({ children }) => {
	return (
		<div className="wrapper">
			<div className="wrap">
				<Header />
				<div className="main">
					<div className="container">
						<Leftbar />
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
