import { Route, Routes, useNavigate } from "react-router-dom";

import SignInPage from "./pages/SignInPage/SignInPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import TodayPage from "./pages/TodayPage/TodayPage";

function App() {

	return (
		<Routes>
			<Route exact path="/" element={<SignInPage/>} />
			<Route exact path="/cadastro" element={<SignUpPage/>} />
			<Route exact path="/hoje" element={<TodayPage/>} />
		</Routes>		
	);
}

export default App;