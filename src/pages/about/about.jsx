import React from "react";

//components
import { Quote, PageTitle } from "../../components";

//bootstrap
import { Container, Row, Col, Image } from "react-bootstrap";

//styles
import "./about.scss";

//assets
import { profilePic } from "../../data/data";

const About = () => {
  return (
    <main className="about-me-section">
      <PageTitle title="About Me" />
      <Quote
        quote={
          "The good life is a process, not a state of being. It is a direction, not a destination.”"
        }
        author={"Carl Rogers"}
      />
      <section className="about-me-bio">
        <Container fluid>
          <Row>
            <Col lg={1} />
            <Col lg={4}>
              <Image width={300} height={300} src={profilePic} thumbnail />
            </Col>
            <Col lg={7}>2 of 2</Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default About;
