import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import "./styles/fonts.css";
import GlobalStyle from './styles/GlobalStyle';

import App from './App';
import UserProvider from './contexts/UserContext';
import ProgressBarProvider from './contexts/ProgressBarContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<GlobalStyle/>
		
		<BrowserRouter>

			<UserProvider>
				<ProgressBarProvider>
					<App/>
				</ProgressBarProvider>
			</UserProvider>
		</BrowserRouter>
	</React.StrictMode>
);
