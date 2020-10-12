import React from "react";

//bootstrap
import { Container, Row, Col } from "react-bootstrap";

//styles
import "./quote.scss";

const Quote = (props) => {
  console.log(props);
  return (
    <>
      <section className="quote-block">
        <Container>
          <Row>
            <Col></Col>
            <Col lg={8} md={7}>
              <blockquote>
                <p className="quote">{props.quote}</p>
              </blockquote>
              <cite>
                <span>{props.author}</span>
              </cite>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Quote;
