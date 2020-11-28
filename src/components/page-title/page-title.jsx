import React from "react";

//styles
import "./page-title.scss";

const PageTitle = ({ title, ...props }) => {
  return (
    <section className="page-heading" {...props}>
      <h1 className="page-title">{title}</h1>
    </section>
  );
};

export default PageTitle;
