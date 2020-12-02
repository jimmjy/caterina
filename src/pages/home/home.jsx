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
  console.log("process", process.env.REACT_APP_NOT_SECRET_CODE);
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
      <Container>
        <Row>
          <Col sm={4}>
            <PageTitle title={APPROACH.title} />
            <p className="approach-description">{APPROACH.description}</p>
            <Link className="approach-link" to={APPROACH.link.url}>
              {APPROACH.link.title}
            </Link>
          </Col>
          <Col sm={3}>
            <Image className="profile-image" src={cateImage} />
          </Col>
          <Col sm={5}>
            <PageTitle title={ABOUT_ME.title} />
            <div className="about-me">
              {ABOUT_ME.description.map((description) => (
                <p className="about-me">{description}</p>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
