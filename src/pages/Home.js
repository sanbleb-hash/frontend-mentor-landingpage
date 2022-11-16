import React from 'react';
import styled from 'styled-components';
import Header from './Header';

const Home = () => {
	return (
		<HomePage>
			<Header />
		</HomePage>
	);
};

const HomePage = styled.main`
	min-height: 90vh;
	width: 80vw;
	margin: 0 auto;
	background-color: #fff;
	color: var(--main-color);
`;

export default Home;
