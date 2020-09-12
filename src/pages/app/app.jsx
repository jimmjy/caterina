import React from "react";
import "./app.scss";
import { Router } from "@reach/router";

//components
import { Navbar, Footer } from "../../components";
import { About, Blog, Contact, Services, Fees, Home } from "../";

const App = () => (
  <div className="main-page">
    <Navbar />
    <Router>
      <Home path="/" />
      <About path="/about" />
      <Services path="/services" />
      <Fees path="/fees" />
      <Blog path="/blog" />
      <Contact path="/contact" />
    </Router>
    <Footer />
  </div>
);

export default App;
