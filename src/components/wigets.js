import React from 'react';
import styled from 'styled-components';

const Wigets = () => {
	return (
		<Wiget>
			<Container className='main-container'>
				<article className='containts'>
					<img
						className='img'
						src='/assets/images/image-retro-pcs.jpg'
						alt='retro pc'
					/>
					<div className='inner-container'>
						<h2> 01</h2>
						<h3> Reviving Retro PCs </h3>
						<p>What happens when old PCs are given modern upgrades?</p>
					</div>
				</article>

				<article className='containts'>
					<img
						className='img'
						src='/assets/images/image-top-laptops.jpg'
						alt='retro pc'
					/>
					<div className='inner-container'>
						<h2> 02</h2>
						<h3> Top 10 Laptops of 2022 </h3>
						<p>Our best picks for various needs and budgets.</p>
					</div>
				</article>
				<article className='containts'>
					<img
						className='img'
						src='/assets/images/image-gaming-growth.jpg'
						alt='retro pc'
					/>
					<div className='inner-container'>
						<h2> 03</h2>
						<h3> The Growth of Gaming </h3>
						<p>How the pandemic has sparked fresh opportunities.</p>
					</div>
				</article>
			</Container>
		</Wiget>
	);
};

const Wiget = styled.section`
	max-height: 200px;
	@media (max-width: 1110px) {
		.main-container {
			flex-wrap: wrap;
			margin: 0 auto;
		}
		.containts {
			min-width: 350px;
			font-size: 12px;
		}
	}
	@media (max-width: 768px) {
		.main-container {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}
		.containts {
			min-width: 450px;
			justify-content: space-between;
		}
	}
`;
const Container = styled.div`
	display: flex;
	align-items: center;
	gap: 4rem;
	width: 100%;
	height: 90%;
	justify-content: space-between;

	.containts {
		display: flex;
		width: 35%;
		align-items: start;
		gap: 0.5rem;
		box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
		height: 150px;

		.img {
			width: 50%;
			height: 150px;
			object-fit: contain;
		}
	}
	.inner-container {
		display: flex;
		align-items: start;
		justify-content: space-between;
		height: 100%;
		flex-direction: column;
		align-items: center;
		gap: 5px;
		h2,
		h3,
		p {
			margin: 0;
			display: inline-block;
		}
		h2 {
			font-size: 2rem;
			color: var(--primary-blue);

			align-self: flex-start;
		}
		h3 {
			font-size: 1rem;
			color: var(--main-color);
			align-self: flex-start;
		}
		p {
			font-size: 0.8rem;
			color: var(--primary-blue);
		}
	}
`;
export default Wigets;
