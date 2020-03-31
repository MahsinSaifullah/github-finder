import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Navbar from './components/layouts/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import User from './components/users/User';
import Alert from './components/layouts/Alert';

import './App.css';

const App = () => {
	//set alert

	return (
		<div className='App'>
			<Navbar />
			<div className='container'>
				<Alert />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/about' component={About} />
					<Route exact path='/user/:login' component={User} />
					<Route component={NotFound} />
				</Switch>
			</div>
		</div>
	);
};

export default App;
