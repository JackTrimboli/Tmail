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
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {}, []);
  if (loggedIn) {
    return (
      <Router>
        <Navbar />
        <Topnav />
        <Route path="/inbox" component={Inbox} />
        <Route path="/keywords" component={Keywords} />
        <Route path="/settings" component={Settings} />
      </Router>
    );
  } else {
    return <Landing />;
  }
}

export default App;
