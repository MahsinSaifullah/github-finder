import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = ({ user: { id, login, avatar_url, html_url } }) => {
	return (
		<div className='card text-center'>
			<img
				src={avatar_url}
				alt={login}
				className='round-img'
				style={{ width: '25%' }}
			/>
			<h3>{login}</h3>
			<div>
				<Link to={`/user/${login}`} className='btn btn-dark btn-sm my-1'>
					Learn More
				</Link>
			</div>
		</div>
	);
};

UserItem.protoTypes = {
	user: PropTypes.object.isRequired
};

export default UserItem;
