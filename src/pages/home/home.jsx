import React from "react";

//components
import { PageTitle } from "../../components";

//bootstrap
import { Container, Row, Col, Image } from "react-bootstrap";

//data
import { MAIN_TITLE, SERVICES, APPROACH } from "../../data/home";

//router
import { Link } from "@reach/router";

//styles
import "./home.scss";

const Home = ({ style }) => {
  const { name, profession } = MAIN_TITLE;
  return (
    <div style={style}>
      <Container>
        <Row className="title-upper">
          <Col>
            <h1 className="title-name">{name}</h1>
          </Col>
        </Row>
      </Container>
      <Row className="clear-margin">
        <Col className="title-lower">
          <p className="title-profession">{profession}</p>
        </Col>
      </Row>
      <Container className="service-container">
        <Row>
          {SERVICES.map(({ title, description, link }) => {
            return (
              <Col className="service" key={title}>
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
      {/* add background color to container below */}
      <Container className="approach-container">
        <Row>
          <Col>
            <PageTitle title={APPROACH.title} />
          </Col>
          <Col lg={12}>
            <p className="approach-description">{APPROACH.description}</p>
          </Col>
          <Col className="d-flex justify-content-center">
            <Link className="approach-link" to={APPROACH.link.url}>
              {APPROACH.link.title}
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
