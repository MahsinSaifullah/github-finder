import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Navbar = ({ title, icon }) => {
	return (
		<nav className='navbar bg-primary'>
			<h1>
				<i className={icon} /> {title}
			</h1>
			<ul>
				<NavLink
					activeStyle={{
						fontWeight: 'bold',
						color: 'black'
					}}
					exact
					to='/'
				>
					Home
				</NavLink>
				<NavLink
					exact
					to='/about'
					activeStyle={{
						fontWeight: 'bold',
						color: 'black'
					}}
				>
					About
				</NavLink>
			</ul>
		</nav>
	);
};

Navbar.defaultProps = {
	title: 'Github Finder',
	icon: 'fab fa-github'
};

Navbar.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired
};

export default Navbar;
