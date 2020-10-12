import React from "react";

//styles
import "./page-title.scss";

const PageTitle = ({ title }) => {
  return (
    <section className="page-heading">
      <h1 className="page-title">{title}</h1>
    </section>
  );
};

export default PageTitle;
