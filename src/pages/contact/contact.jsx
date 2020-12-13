import React from "react";
import { useForm, ValidationError } from "@formspree/react";

//components
import { PageTitle } from "../../components";

//bootstrap
import { Container, Row, Col } from "react-bootstrap";

//data
import { CONTACT } from "../../data/contact";

//styles
import "./contact.scss";

const Contact = ({ style }) => {
  const [state, handleSubmit] = useForm("contactForm");

  if (state.succeeded) {
    return (
      <Container>
        <Row className="justify-content-center">
          <Col sm={8} className="thank-you">
            <p >Thanks for reaching out, we look forward to contacting you!</p>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <div style={style}>
      <Container>
        <Row>
          <Col>
            <PageTitle title={CONTACT.title} />
          </Col>
        </Row>
        <Row className="justify-content-sm-center">
          <Col className="help-description">{CONTACT.description}</Col>
        </Row>
        <div className="spacer" />
        <Row className="justify-content-center">
          <Col sm="auto">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-info">
                <div className="contact-name">
                  <div className="first-name">
                    <label htmlFor="first">FIRST NAME</label>
                    <input
                      id="first"
                      type="text"
                      name="first"
                      placeholder="First name ..."
                    />
                  </div>
                  <div className="last-name">
                    <label htmlFor="last">LAST NAME</label>
                    <input
                      id="last"
                      type="text"
                      name="last"
                      placeholder="Last name ..."
                    />
                  </div>
                </div>
                <div className="contact-email">
                  <label htmlFor="email">EMAIL</label>
                  <input
                    className="email-input"
                    id="email"
                    type="email"
                    name="email"
                    placeholder="jane@doe.com ..."
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>
                <div className="contact-message">
                  <label htmlFor="message">MESSAGE</label>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Please be mindful about submitting confidential or sensitive information in your message"
                  ></textarea>
                </div>
                <button
                  className="submit-button"
                  type="submit"
                  disabled={state.submitting}
                >
                  Send Message
                </button>
              </div>
              <div className="contact-me-info">
                <div className="call-me">
                  <a className="call-me-icon" href="tel:+16478727011">
                    <i className="fas fa-phone"></i>
                    <p className="call-me-number">1-647-872-7011</p>
                  </a>
                </div>
                <div className="email-me">
                  <a
                    href="mailto:cate@categennaro.com"
                    className="email-me-link"
                  >
                    <i className="fas fa-envelope"></i>
                    <p className="email-me-address">cate@categennaro.com</p>
                  </a>
                </div>
              </div>
              <div className="social-media">
                <a
                  className="email-me-link"
                  href={"//www.instagram.com/categennaro/"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  className="email-me-link"
                  href={"//www.linkedin.com/in/katiegennaro"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
