import React, { useEffect, useRef } from 'react';

//components
import { PageTitle, Quote } from '../../components';

//bootstrap
import { Container, Row, Col } from 'react-bootstrap';

//data
import { STRESSORS, WHAT_I_OFFER } from '../../data/myServices';

//styles
import './services.scss';

const Services = ({ location }) => {
	const references = {
		Anxiety: useRef(null),
		Depression: useRef(null),
		SelfWorth: useRef(null),
		Relationships: useRef(null),
		StressManagement: useRef(null),
	};

	useEffect(() => {
		const ref = references[location.state.fromLink];

		ref && ref.current.scrollIntoView();
	}, [location, references]);

	return (
		<div>
			<PageTitle title='Services' />
			<Quote
				quote={
					'When we are no longer able to change a situation, we are challenged to change ourselves."'
				}
				author={'Viktor Frankl'}
			/>
			<section className='stressors'>
				<Container>
					<Row>
						<Col>
							{STRESSORS.map((stress) => (
								<div
									ref={references[stress.title.replace(/\s+|-/g, '')]}
									className='stress-type'
									key={stress.title}
								>
									<h4
										id={
											stress.title === 'Stress Management'
												? 'Stress-Management'
												: stress.title
										}
										className='stress-title'
									>
										{stress.title}
									</h4>
									<p className='stress-description'>{stress.description}</p>
								</div>
							))}
						</Col>
					</Row>
					<Row>
						<Col>
							<p className='offer-title'>{WHAT_I_OFFER.title}</p>
							<p className='offer-listTitle'>{WHAT_I_OFFER.listTitle}</p>
							<ul>
								{WHAT_I_OFFER.listItems.map((item) => (
									<li key={item}>{item}</li>
								))}
							</ul>
							<p className='my-commitment'>{WHAT_I_OFFER.commitment}</p>
						</Col>
					</Row>
					<Row>
						<Col lg={6}>image</Col>
						<Col>
							<ul>
								{WHAT_I_OFFER.treatmentList.map((treatment) => (
									<li key={treatment}>{treatment}</li>
								))}
							</ul>
						</Col>
					</Row>
				</Container>
			</section>
		</div>
	);
};

export default Services;
