import React from 'react';
import styled from 'styled-components';

const Wigets = () => {
	return (
		<Wiget>
			<Container>
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
	padding: 10px 0;
	max-height: 250px;
`;
const Container = styled.div`
	display: flex;
	align-items: center;
	gap: 4rem;
	width: 100%;
	justify-content: space-between;

	.containts {
		display: flex;
		width: 33%;
		align-items: start;
		gap: 2rem;

		.img {
			width: 50%;
			height: 150px;
		}
	}
	.inner-container {
		display: flex;
		align-items: start;
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
			font: 4rem;
			color: var(--primary-blue);

			align-self: flex-start;
		}
		h3 {
			font: 0.5rem;
			color: var(--main-color);
			align-self: flex-start;
		}
		p {
			font: 0.8rem;
			color: var(--primary-blue);
		}
	}
`;
export default Wigets;
