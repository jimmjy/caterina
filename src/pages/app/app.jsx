import React, { useState, useEffect } from "react";
import "./app.scss";
import { Router } from "@reach/router";

//components
import { Navbar, Footer } from "../../components";
import { About, Blog, Contact, Services, Fees, Home, Approach } from "../";

const App = () => {
  const [footerHeight, setFooterHeight] = useState(0);

  useEffect(() => {
    console.log("from app footer height", footerHeight);
  }, [footerHeight]);

  return (
    <div className="main-page">
      <Navbar />
      <Router primary={false}>
        <Home path="/" style={{ marginBottom: `${footerHeight}px` }} />
        <About path="/about" style={{ marginBottom: `${footerHeight}px` }} />
        <Approach
          path="/approach"
          style={{ marginBottom: `${footerHeight}px` }}
        />
        <Services
          path="/services"
          style={{ marginBottom: `${footerHeight}px` }}
        />
        <Fees path="/fees" style={{ marginBottom: `${footerHeight}px` }} />
        <Blog path="/blog" style={{ marginBottom: `${footerHeight}px` }} />
        <Contact
          path="/contact"
          style={{ marginBottom: `${footerHeight}px` }}
        />
      </Router>
      <Footer setFooterHeight={setFooterHeight} />
    </div>
  );
};

export default App;
