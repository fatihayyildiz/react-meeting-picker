import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
	return (
		<div className="container date-select-container">
			<p>
				<Link to={'/'}>Home</Link>
			</p>
			<p>
				Our call center agents are using a website to choose a (possible for the
				seller) time slot when they are on the phone with the buyer. This
				website is currently (Ruby on Rails) server-side rendered. We want to
				rebuild it with React to make it more user friendly and interactive.
			</p>
		</div>
	);
};

export default About;
