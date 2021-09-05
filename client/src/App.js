import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Topnav from "./components/Topnav/Topnav";
import Settings from "./components/Settings/Settings";
import Keywords from "./components/Keywords/Keywords";
import Inbox from "./components/Inbox/Inbox";
import Landing from "./components/Landing/Landing";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Landing} />
      <Route path="/inbox">
        <Navbar />
        <Topnav />
        <Inbox />
      </Route>
      <Route path="/keywords">
        <Navbar />
        <Topnav />
        <Keywords />
      </Route>
      <Route path="/settings">
        <Navbar />
        <Topnav />
        <Settings />
      </Route>
    </Router>
  );
}

export default App;
