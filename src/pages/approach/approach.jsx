import React, { useEffect } from "react";

//bootstrap
import { Container, Row, Col } from "react-bootstrap";

//components
import { PageTitle } from "../../components";

//data
import { MY_APPROACH } from "../../data/myApproach";

//styles
import "./approach.scss";

const Approach = ({ style }) => {
  const { title, aboveImage, belowImage } = MY_APPROACH;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={style}>
      <PageTitle title={title} />
      <section className="my-approach-content">
        <Container>
          <Row>
            <Col>
              {aboveImage.map((content) => (
                <p key={content}>{content}</p>
              ))}
            </Col>
          </Row>
          <Row>
            <Col>
              <b>Image here</b>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>{belowImage.listTitle}</p>
              <ul>
                {belowImage.listItems.map((item) => (
                  <li key={item}>{item}</li>
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
