import React from 'react';

//components
import { PageTitle } from '../../components';

//bootstrap
import { Container, Row, Col, Image } from 'react-bootstrap';

//data
import { FEES } from '../../data/fees';

//styles
import './fees.scss';

const Fees = () => {
	return (
		<Container>
			<PageTitle title='Fees and Insurance' />
			<section className='fees-main-content'>
				<div>
					<p className='consult'>{FEES.free}</p>
					<p className='requirement'>{FEES.requirement}</p>
				</div>
				{FEES.types.map((fee) => (
					<Row>
						<Col lg={4} className='fee-title'>
							{fee.title}
						</Col>
						<Col lg={8} className='fee-description-container'>
							{fee.description.map((item) => (
								<p className='fee-description'>{item}</p>
							))}
						</Col>
					</Row>
				))}
			</section>
		</Container>
	);
};

export default Fees;
