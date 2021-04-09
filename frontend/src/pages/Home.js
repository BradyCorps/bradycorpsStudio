import React from 'react';
import { Typography, Container } from '@material-ui/core';

const Home = () => {
	return (
		<Container align="center">
			<Typography component={'div'} variant="h5">
				<span>Welcome</span>
			</Typography>
			<Typography component={'div'} variant="h6">
				<span>Come take a look around</span>
			</Typography>
		</Container>
	);
};

export default Home;
