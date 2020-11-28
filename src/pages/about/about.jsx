import React from "react";

//components
import { Quote, PageTitle } from "../../components";

//bootstrap
import { Container, Row, Col, Image } from "react-bootstrap";

//styles
import "./about.scss";

//assets
import { profilePic, PAGE_CONTENT } from "../../data/about";

const About = ({ style }) => {
  const { title, aboveImage, belowImage, imageQuote } = PAGE_CONTENT;
  return (
    <main className="about-me-section" style={style}>
      <PageTitle title={title} />
      <Quote
        quote={
          "The good life is a process, not a state of being. It is a direction, not a destination.”"
        }
        author={"Carl Rogers"}
      />
      <section className="about-me-bio">
        <Container>
          <Row>
            <Col>
              {aboveImage.map((content) => (
                <p key={content}>{content}</p>
              ))}
            </Col>
          </Row>
          <Row>
            {/* adding a quote here */}
            <Col lg={2} />
            <Col lg={5}>
              <Quote quote={imageQuote} />
            </Col>
            <Col lg={4}>
              <Image
                width={200}
                height={200}
                src={profilePic}
                thumbnail
                roundedCircle
                fluid
              />
            </Col>
            {/* <Col lg={7}>2 of 2</Col> */}
          </Row>
          <Row>
            <Col>
              {belowImage.map((content) => (
                <p key={content}>{content}</p>
              ))}
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default About;
