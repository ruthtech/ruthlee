import React from "react";
import { HashRouter, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import TitleBar from "./components/TitleBar";
import Home from "./components/pages/Home";
import Skills from "./components/pages/Skills";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <HashRouter>
      <div className="full-screen">
        <TitleBar />
        <NavTabs />
        <Route exact path={["/", "/ruthlee", ""]} component={Home} />
        <Route path="/skills" component={Skills} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
      </div>
    </HashRouter>
  );
}

export default App;
