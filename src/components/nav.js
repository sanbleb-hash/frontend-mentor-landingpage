import React from 'react';
import styled from 'styled-components';

import { FaBars } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
const Nav = () => {
	const activated = {
		borderBottom: '2px solid hsl(5, 85%, 63%)',
		paddingBottom: '5px',
		textDecoration: 'none',
		transition: ' all .10s ease-in',
		color: 'hsl(240, 100%, 5%)',
	};
	const notActive = {
		textDecoration: 'none',
		color: 'hsl(240, 100%, 5%)',
	};
	return (
		<NavBar>
			<div>
				<h1>
					<Brand src='/assets/images/logo.svg' alt='brand' />
				</h1>
				<LeftNav>
					<li>
						<NavLink
							style={({ isActive }) => (isActive ? activated : notActive)}
							to='/'
						>
							home
						</NavLink>
					</li>
					<li>
						<NavLink
							style={({ isActive }) => (isActive ? activated : notActive)}
							to='/news'
						>
							news
						</NavLink>
					</li>
					<li>
						<NavLink
							style={({ isActive }) => (isActive ? activated : notActive)}
							to='/popular'
						>
							popular
						</NavLink>
					</li>
					<li>
						<NavLink
							style={({ isActive }) => (isActive ? activated : notActive)}
							to='/trending'
						>
							trending
						</NavLink>
					</li>
					<li>
						<NavLink
							style={({ isActive }) => (isActive ? activated : notActive)}
							to='/categories'
						>
							categories
						</NavLink>
					</li>
				</LeftNav>
				<FaBars className='hambager-icon' fill='gray' size={30} />
			</div>
		</NavBar>
	);
};

const NavBar = styled.nav`
	height: 10vh;
	width: 80vw;
	margin: 0 auto;
	padding: 5px 0;
	background: #fff;
	color: (--main-color);
	div {
		display: flex;
		align-items: center;
		justify-content: space-between;
		.hambager-icon {
			display: none;

			@media (max-width: 1110px) {
				display: block;
			}
		}
	}

	@media (max-width: 1110px) {
		height: 7vh;
		padding: 10px 0;
	}
`;
const Brand = styled.img`
	width: 50px;
	cursor: pointer;
	@media (max-width: 1110px) {
		width: 30px;
	}
`;
const LeftNav = styled.ul`
	display: flex;
	height: 100%;

	align-items: center;
	justify-content: space-between;
	gap: 15px;
	font-size: 1.5em;
	text-transform: capitalize;
	color: var(--main-color);
	list-style: none;

	li:hover {
		background: rgb(248, 248, 250);
	}
	@media (max-width: 1110px) {
		display: none;
	}
`;

export default Nav;
