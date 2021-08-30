import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Topnav from "./components/Topnav/Topnav";
import Settings from "./components/Settings/Settings";
import Keywords from "./components/Keywords/Keywords";
import Inbox from "./components/Inbox/Inbox";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  const [width, setWidth] = useState(0);
  //test
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);

    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const updateDimensions = () => {
    const windowWidth = window.innerWidth;
    setWidth(windowWidth);
  };

  return (
    <Router>
      <Navbar />
      <Topnav />
      <Route path="/inbox" component={Inbox} />
      <Route path="/keywords" component={Keywords} />
      <Route path="/settings" component={Settings} />
    </Router>
  );
}

export default App;
