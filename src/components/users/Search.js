import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
	const { searchUser, clearUsers, users } = useContext(GithubContext);
	const { setAlert } = useContext(AlertContext);
	const [text, setText] = useState('');

	const handleOnChange = e => {
		setText(e.target.value);
	};

	const handleOnSubmit = e => {
		e.preventDefault();
		if (text === '') {
			setAlert('Please Enter Something', 'light');
		} else {
			searchUser(text);
			setText('');
		}
	};

	return (
		<div>
			<form onSubmit={handleOnSubmit} className='form'>
				<input
					type='text'
					name='text'
					placeholder='Search Users...'
					value={text}
					onChange={handleOnChange}
				/>
				<input
					type='submit'
					value='Search'
					className='btn btn-dark btn-block'
				/>
			</form>
			{users.length > 0 && (
				<button className='btn btn-light btn-block' onClick={clearUsers}>
					Clear
				</button>
			)}
		</div>
	);
};

export default Search;
