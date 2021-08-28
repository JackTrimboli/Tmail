import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
function App() {
  const [width, setWidth] = useState(0);

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
    </div>
  );
}

export default App;
