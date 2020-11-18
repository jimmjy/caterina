import React from 'react';

//bootstrap
import { Container, Row, Col } from 'react-bootstrap';

//data
import { MAIN_TITLE, SERVICES } from '../../data/home';

//router
import { Link } from '@reach/router';

//styles
import './home.scss';

const Home = () => {
	const { name, profession } = MAIN_TITLE;
	return (
		<>
			<Container>
				<Row className='title-upper'>
					<Col>
						<h1 className='title-name'>{name}</h1>
					</Col>
				</Row>
			</Container>
			<Row className='clear-margin'>
				<Col className='title-lower'>
					<p className='title-profession'>{profession}</p>
				</Col>
			</Row>
			<Container>
				<Row>
					{SERVICES.map(({ title, description, link }) => {
						return (
							<Col className='service' key={title}>
								<h2>{title}</h2>
								<p>{description}</p>
								<Link to={link.url} state={{ fromLink: link.ref }}>
									{link.title}
								</Link>
							</Col>
						);
					})}
				</Row>
			</Container>
		</>
	);
};

export default Home;
