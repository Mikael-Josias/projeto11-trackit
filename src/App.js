import LoginPage from "./pages/LoginPage";
import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

function App() {
	const navigate = useNavigate();
	const [authToken, setAuthToken] = useState(null);

	useEffect(() => {
		if (authToken === null) {
			navigate("/");
		}
		
	}, []);

	return (
		<Routes>
			<Route path="/" element={<LoginPage/>} />
		</Routes>
	);
}

export default App;