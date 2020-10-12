import React from "react";

//components
import { PageTitle, Quote } from "../../components";

//styles
import "./services.scss";

const Services = () => {
  return (
    <div>
      <PageTitle title="Services" />
      <Quote
        quote={
          'When we are no longer able to change a situation, we are challenged to change ourselves."'
        }
        author={"Viktor Frankl"}
      />
    </div>
  );
};

export default Services;
