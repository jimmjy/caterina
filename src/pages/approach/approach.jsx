import React, { useEffect } from "react";

//bootstrap
import { Container, Row, Col } from "react-bootstrap";

//components
import { PageTitle } from "../../components";

//data
import { MY_APPROACH } from "../../data/myApproach";

//images
import approachImage from "../../assets/approach-image.jpg";

//styles
import "./approach.scss";

const Approach = ({ style }) => {
  const { title, aboveImage, belowImage } = MY_APPROACH;
  console.log("style", style);

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
          <Row className="justify-content-center">
            <Col sm={8}>
              <img
                className="approach-image"
                src={approachImage}
                alt="overlooking a river"
              />
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
