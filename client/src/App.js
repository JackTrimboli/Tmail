import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Topnav from "./components/Topnav/Topnav";
import Inbox from "./components/Inbox/Inbox";
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
    <div>
      <Navbar />
      <Topnav />
      <Inbox />
    </div>
  );
}

export default App;
