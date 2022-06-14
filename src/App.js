import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Feed, Profile } from "./pages";

import "./App.css";
import Post from "./pages/Post";

function App() {
	return (
		<Router>
			<div className="app">
				<Routes>
					<Route path="/" exact element={<Feed />} />
					<Route path="/post" element={<Post />} />
					<Route path="/profile" element={<Profile />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
