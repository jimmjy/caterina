import React from "react";

//styles
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="page-footer font-small footer">
      {/* <div class="container-fluid text-center text-md-left">
        <div class="row">
          <div class="col-md-6 mt-md-0 mt-3">
            <h5 class="text-uppercase">Footer Content</h5>
            <p>possible content here</p>
          </div>
        </div>
      </div> */}
      <div className="footer-copyright text-center py-3">
        © 2020 Copyright Caterina Gennaro Psychotherapy
      </div>
    </footer>
  );
};

export default Footer;
