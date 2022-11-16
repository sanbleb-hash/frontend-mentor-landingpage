import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Nav from './components/nav';
import Home from './pages/Home';

const App = () => {
	return (
		<>
			<Nav />
			<Routes>
				<Route element={<Home />} path='/' />
			</Routes>
		</>
	);
};

export default App;
