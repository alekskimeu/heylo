import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Feed, Login, NewPost, Profile, Register } from "./pages";

import "./App.css";
import Post from "./pages/Post";
import { useState } from "react";

function App() {
	return (
		<Router>
			<div className="app">
				<Routes>
					<Route path="/" exact element={<Feed />} />
					<Route path="/login" element={<Login />} />
					<Route path="/new-post" element={<NewPost />} />
					<Route path="/post" element={<Post />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/register" element={<Register />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
