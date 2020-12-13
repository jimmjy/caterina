import React, { useState } from "react";
import "./app.scss";
import { Router, createHistory, LocationProvider } from "@reach/router";
import createHashHistory from "hash-source";

//components
import { Navbar, Footer } from "../../components";
import { About, Blog, Contact, Services, Fees, Home, Approach } from "../";

const App = () => {
  const source = createHashHistory();
  const history = createHistory(source);

  const [footerHeight, setFooterHeight] = useState(0);

  return (
    <LocationProvider history={history}>
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
    </LocationProvider>
  );
};

export default App;
