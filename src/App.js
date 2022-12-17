import { useContext, useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import UserProvider, { UserContext } from "./contexts/UserContext";

import SignInPage from "./pages/SignInPage/SignInPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import TodayPage from "./pages/TodayPage/TodayPage";

function App() {
	const navigate = useNavigate();
	const [authToken, setAuthToken] = useState(null);
	const { userData } = useContext(UserContext);

	return (
		<Routes>
			<Route exact path="/" element={<SignInPage/>} />
			<Route exact path="/cadastro" element={<SignUpPage/>} />
			<Route exact path="/hoje" element={<TodayPage/>} />
		</Routes>		
	);
}

export default App;