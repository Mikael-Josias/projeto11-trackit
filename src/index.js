import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import "./styles/fonts.css";
import GlobalStyle from './styles/GlobalStyle';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<GlobalStyle/>
		
		<BrowserRouter>
			<App/>
		</BrowserRouter>
	</React.StrictMode>
);
