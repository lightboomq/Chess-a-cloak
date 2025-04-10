import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from './Layout.jsx';
import Settings from "./Settings.jsx";
import Game from "./Game.jsx";


function App() {
	return (
		<Routes>
			<Route element={<Layout/>}>
				<Route path="/" element={<Settings />} />
				<Route path="/game" element={<Game />} />
			</Route>
		</Routes>
	);
}

export default App;
