import React from "react";

//components
import { PageTitle } from "../../components";

//styles
import "./blog.scss";

const Blog = ({ style }) => {
  return (
    <div style={style}>
      <PageTitle title="Blog" />
    </div>
  );
};

export default Blog;
