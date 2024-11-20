import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>  {/*Needed to use react-router-dom's routing components like <Route>, <Link>, and <Switch> (or <Routes> in newer versions).*/}
			<App />
		</BrowserRouter>
	</React.StrictMode>
);