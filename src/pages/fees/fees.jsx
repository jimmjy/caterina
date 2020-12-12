import React from "react";

//components
import { PageTitle } from "../../components";

//bootstrap
import { Container, Row, Col } from "react-bootstrap";

//data
import { FEES } from "../../data/fees";

//styles
import "./fees.scss";

const Fees = ({ style }) => {
  return (
    <Container style={{ ...style, paddingBottom: "10px" }}>
      <PageTitle title="Fees and Insurance" />
      <section className="fees-main-content">
        <div>
          <p className="consult">{FEES.free}</p>
          <p className="requirement">{FEES.requirement}</p>
        </div>
        <div className="fee-grid">
          {FEES.types.map((fee, i) => (
            <Row key={fee.title}>
              <Col md={1} sm={0} />
              <Col md={3} sm={4} className={`fee-title title-${i}`}>
                {fee.title}
              </Col>
              <Col
                md={7}
                sm={8}
                className={`fee-description-container description-${i}`}
              >
                {fee.description.map((item) => (
                  <p key={item} className="fee-description">
                    {item}
                  </p>
                ))}
              </Col>
              <Col md={1} sm={0} />
            </Row>
          ))}
        </div>
        <div className="payment-container">
          {FEES.payment.map((payment) => (
            <Row key={payment}>
              <Col>
                <p>{payment}</p>
              </Col>
            </Row>
          ))}
        </div>
        <div className="policy-container">
          {FEES.policies.map((policy) => (
            <React.Fragment key={policy.title}>
              <h5 className="policy-title">{policy.title}</h5>
              <p className="policy-description">{policy.description}</p>
            </React.Fragment>
          ))}
        </div>
      </section>
    </Container>
  );
};

export default Fees;
