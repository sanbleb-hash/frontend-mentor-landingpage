import React from 'react';
import styled from 'styled-components';
import Wigets from '../components/wigets';

const Header = () => {
	return (
		<Section>
			<RightSection>
				<article className='banner-container'>
					<img
						className='banner-image'
						src='/assets/images/image-web-3-desktop.jpg'
						alt='Flowers'
					/>
				</article>
				<article className='intro-container'>
					<h1 className='title'>
						The Bright{' '}
						<span style={{ display: 'block', color: 'orange' }}>future of</span>{' '}
						Web 3.0
					</h1>
					<div className='intro-text'>
						<p className='intro-content'>
							We dive into the next evolution of the web that claims to put the
							power of the platforms back into the hands of the people. But is
							it really fulfilling its promise?{' '}
						</p>
						<button className='intro-btn'>read more</button>
					</div>
				</article>
			</RightSection>
			<LeftSection></LeftSection>
			<BottomSection>
				<Wigets />
			</BottomSection>
		</Section>
	);
};

const Section = styled.section`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 15px;
	min-height: 60vh;
	width: 100%;
`;
const RightSection = styled.section`
	grid-column: span 2;
	width: 100%;
	min-height: 60vh;
	display: flex;
	align-items: start;
	gap: 15px;
	justify-content: start;
	flex-direction: column;

	.banner-container {
		width: 100%;
	}
	.banner-image {
		width: 100%;
		display: inline-block;
	}
	.intro-container {
		display: flex;
		gap: 15px;
		align-items: start;
		justify-content: space-between;

		h1 {
			font-size: 2.5rem;
			font-family: roboto;
			margin: 0;
			padding-right: 4rem;
		}
	}
	.intro-text {
		display: flex;
		height: 100%;
		flex-direction: column;
		align-items: start;
		justify-content: space-between;
		flex-grow: 1;
		max-width: 450px;
		p {
			margin: 0;
		}
	}
	.intro-btn {
		color: #fff;
		display: inline-block;
		letter-spacing: 0.3rem;
		padding: 15px 40px;
		background: var(--soft-red);
		border: 0;
		text-transform: uppercase;
		font-family: 'roboto';
		cursor: pointer;

		&:hover {
			opacity: 0.9;
		}
	}
`;
const LeftSection = styled.section`
	background-color: var(--main-color);
`;
const BottomSection = styled.section`
	background-color: inherit;
	margin-top: 4rem;
	grid-column: span 3;
`;

export default Header;