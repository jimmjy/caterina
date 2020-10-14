import React from 'react';
import './app.scss';
import { Router } from '@reach/router';

//components
import { Navbar, Footer } from '../../components';
import { About, Blog, Contact, Services, Fees, Home, Approach } from '../';

const App = () => (
	<div className='main-page'>
		<Navbar />
		<Router primary={false}>
			<Home path='/' />
			<About path='/about' />
			<Approach path='/approach' />
			<Services path='/services' />
			<Fees path='/fees' />
			<Blog path='/blog' />
			<Contact path='/contact' />
		</Router>
		<Footer />
	</div>
);

export default App;
