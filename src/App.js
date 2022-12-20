import { Route, Routes, useNavigate } from "react-router-dom";
import HabitsPage from "./pages/HabitsPage/HabitsPage";
import HistoryPage from "./pages/HistoryPage/HistoryPage";

import SignInPage from "./pages/SignInPage/SignInPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import TodayPage from "./pages/TodayPage/TodayPage";

function App() {

	return (
		<Routes>
			<Route exact path="/" element={<SignInPage/>} />
			<Route exact path="/cadastro" element={<SignUpPage/>} />
			<Route exact path="/hoje" element={<TodayPage/>} />
			<Route exact path="/habitos" element={<HabitsPage/>} />
			<Route exact path="/historico" element={<HistoryPage/>} />
		</Routes>		
	);
}

export default App;