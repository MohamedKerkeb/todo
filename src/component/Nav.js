import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ filter }) => {
	return (
		<>
			<nav>
				<button onClick={() => filter('all')}>
					<Link to='/'>All</Link>
				</button>
				<button onClick={() => filter('active')}>
					<Link to='/active'>Active</Link>
				</button>
				<button onClick={() => filter('completed')}>
					<Link to='/completed'>Completed</Link>
				</button>
			</nav>
		</>
	);
};

export default Nav;
