import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import SignInPage from "./pages/SignInPage/SignInPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";

function App() {
	const navigate = useNavigate();
	const [authToken, setAuthToken] = useState(null);

	//Se não existir token, então usuário deve logar novamente.
	// if (authToken === null) {
	// 	navigate("/");
	// }

	return (
		<Routes>
			<Route exact path="/" element={<SignInPage/>} />
			<Route exact path="/cadastro" element={<SignUpPage/>} />
		</Routes>
	);
}

export default App;