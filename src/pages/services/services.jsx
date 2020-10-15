import React from 'react';

//components
import { PageTitle, Quote } from '../../components';

//bootstrap
import { Container, Row, Col, Image } from 'react-bootstrap';

//data
import { STRESSORS, WHAT_I_OFFER } from '../../data/myServices';

//styles
import './services.scss';

const Services = () => {
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
								<div className='stress-type'>
									<h4 className='stress-title'>{stress.title}</h4>
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
									<li>{item}</li>
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
									<li>{treatment}</li>
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
