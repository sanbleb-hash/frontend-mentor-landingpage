import React from 'react';
import styled from 'styled-components';

const TopWiget = () => {
	return (
		<Wiget>
			<h1>New</h1>
			<Container>
				<InfoContainer>
					<h2>New Hydrogen VS Electric Cars </h2>
					<small>Will hydrogen-fueled cars ever catch up to EVs? </small>
				</InfoContainer>

				<InfoContainer>
					<h2>The Downsides of AI Artistry</h2>
					<small>
						What are the possible adverse effects of on-demand AI image
						generation?
					</small>
				</InfoContainer>
				<InfoContainer>
					<h2>Is VC Funding Drying Up? </h2>
					<small>
						Private funding by VC firms is down 50% YOY. We take a look at what
						that means.{' '}
					</small>
				</InfoContainer>
			</Container>
		</Wiget>
	);
};

const Wiget = styled.div`
	margin: 4rem 2rem;
	h1 {
		color: var(--soft-orange);
		font-size: 2rem;

		font-family: roboto;
	}
`;
const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: start;
	margin: auto;
	display: flex;
	align-items: center;
`;
const InfoContainer = styled.div`
	padding-bottom: 2rem;
	h2 {
		color: white;
		font-size: 1rem;
	}
	small {
		color: var(--primary-blue);
	}
	border-bottom: 1px solid var(--primary-blue);
`;

export default TopWiget;
