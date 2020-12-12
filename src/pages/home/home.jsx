import React from "react";

//components
import { PageTitle } from "../../components";

//bootstrap
import { Container, Row, Col, Image } from "react-bootstrap";

//data
import { MAIN_TITLE, SERVICES, APPROACH, ABOUT_ME } from "../../data/home";
import cateImage from "../../assets/cate.JPG";

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
      <Container fluid>
        <Row>
          {SERVICES.map(({ title, description, link, style }) => {
            return (
              <Col
                sm={12}
                md={true}
                className="service"
                key={title}
                style={style}
              >
                <h2 className="service-title">{title}</h2>
                <p>{description}</p>
                <Link
                  className="service-link"
                  to={link.url}
                  state={{ fromLink: link.ref }}
                >
                  {link.title}
                </Link>
              </Col>
            );
          })}
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col lg={4} md={4} sm={12} className="about-container">
            <PageTitle title={ABOUT_ME.title} />
            <div className="about-me">
              {ABOUT_ME.description.map((description) => (
                <p className="about-me" key={description}>
                  {description}
                </p>
              ))}
            </div>
          </Col>
          <Col lg={3} md={4} sm={6} className="about-image">
            <Image className="profile-image" src={cateImage} />
          </Col>
          <Col lg={5} md={4} sm={6} className="approach-container">
            <PageTitle title={APPROACH.title} />
            <p className="approach-description">{APPROACH.description}</p>
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
