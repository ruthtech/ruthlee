import React from "react";
//import { BrowserRouter as Router, Route } from "react-router-dom";
import { HashRouter, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Footer from "./components/Footer";
import Portfolio from "./components/pages/Portfolio";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <HashRouter>
      <div className="full-screen">
        <NavTabs />
        <Route exact path={["/", "/ruthtech", ""]} component={About} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
