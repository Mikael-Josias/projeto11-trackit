import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import UserProvider from "./contexts/UserContext";

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
		<UserProvider>
			<Routes>
				<Route exact path="/" element={<SignInPage/>} />
				<Route exact path="/cadastro" element={<SignUpPage/>} />
			</Routes>				
		</UserProvider>

	);
}

export default App;