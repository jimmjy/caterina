import React from 'react';

//bootstrap
import { Container, Row, Col, Image } from 'react-bootstrap';

//components
import { PageTitle } from '../../components';

//data
import { MY_APPROACH } from '../../data/myApproach';

//styles
import './approach.scss';

const Approach = () => {
	const { title, aboveImage, belowImage } = MY_APPROACH;
	return (
		<div>
			<PageTitle title={title} />
			<section className='my-approach-content'>
				<Container>
					<Row>
						<Col>
							{aboveImage.map((content) => (
								<p>{content}</p>
							))}
						</Col>
					</Row>
					<Row>
						<b>Image here</b>
					</Row>
					<Row>
						<Col>
							<p>{belowImage.listTitle}</p>
							<ul>
								{belowImage.listItems.map((item) => (
									<li>{item}</li>
								))}
							</ul>
						</Col>
					</Row>
				</Container>
			</section>
		</div>
	);
};

export default Approach;
