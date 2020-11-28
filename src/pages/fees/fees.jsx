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
    <Container style={style}>
      <PageTitle title="Fees and Insurance" />
      <section className="fees-main-content">
        <div>
          <p className="consult">{FEES.free}</p>
          <p className="requirement">{FEES.requirement}</p>
        </div>
        <div className="fee-grid">
          {FEES.types.map((fee, i) => (
            <Row key={fee.title}>
              <Col lg={1} />
              <Col lg={3} className={`fee-title title-${i}`}>
                {fee.title}
              </Col>
              <Col
                lg={7}
                className={`fee-description-container description-${i}`}
              >
                {fee.description.map((item) => (
                  <p key={item} className="fee-description">
                    {item}
                  </p>
                ))}
              </Col>
              <Col lg={1} />
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
