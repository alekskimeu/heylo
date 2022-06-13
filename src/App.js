import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Feed, Profile } from "./pages";

import "./App.css";

function App() {
	return (
		<Router>
			<div className="app">
				<Routes>
					<Route path="/" exact element={<Feed />} />
					<Route path="/profile" element={<Profile />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
