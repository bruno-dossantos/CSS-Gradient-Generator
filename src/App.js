import { useState } from "react";
import "./App.css";
import Button from "./components/Button/Button.js";
import Picker from "./components/Picker/Picker";
import GetButton from "./components/GetButton/GetButton";
import Footer from "./components/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import {
  ImArrowUpLeft2,
  ImArrowUp2,
  ImArrowUpRight2,
  ImArrowDownLeft2,
  ImArrowLeft2,
  ImArrowRight2,
  ImArrowDown2,
  ImArrowDownRight2,
} from "react-icons/im";
import { FiCircle } from "react-icons/fi";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [radial, setRadial] = useState(true);
  const [textCSS, setTextCSS] = useState("");
  const [textLink, setTextLink] = useState("");
  const textGetCSS = () => {
    setTextCSS(!textCSS);
    setTimeout(setTextCSS, 3000);
  };
  const textGetLink = () => {
    setTextLink(!textLink);
    setTimeout(setTextLink, 3000);
  };
  return (
    <div className="content">
      <div className="sidebar">
        <div className="content-header">
          <h1 className="title">CSS Gradient Generator</h1>
          <div className={darkMode ? "dark-mode" : "ligth-mode"}>
            <span onClick={() => setDarkMode(!darkMode)}>
              <FontAwesomeIcon className="moon" icon={faMoon} />
            </span>
          </div>
        </div>
        <span className="label">Style</span>
        <div className="style-content">
          <Button>Linear</Button>
          <Button onClick={() => setRadial(!radial)}>Radial</Button>
        </div>
        <span className="label">Direction</span>
        <div className="direction-content">
          <Button>
            <ImArrowUpLeft2 />
          </Button>
          <Button>
            <ImArrowUp2 />
          </Button>
          <Button>
            <ImArrowUpRight2 />
          </Button>
          <Button>
            <ImArrowLeft2 />
          </Button>
          <Button style={{ visibility: radial ? "visible" : "hidden" }}>
            <FiCircle />
          </Button>
          <Button>
            <ImArrowRight2 />
          </Button>
          <Button>
            <ImArrowDownLeft2 />
          </Button>
          <Button>
            <ImArrowDown2 />
          </Button>
          <Button>
            <ImArrowDownRight2 />
          </Button>
        </div>
        <span className="label">Colors</span>
        <div className="colors-content">
          <Picker id="a"></Picker>
          <Picker id="b"></Picker>
          <Button>Random</Button>
        </div>
        <span className="label">Output format</span>
        <div className="output-content">
          <Button>Hex</Button>
          <Button>Rgba</Button>
        </div>
        <div className="get-content">
          <GetButton onClick={textGetCSS} id="get-css">
            {!textCSS ? "Get CSS" : "Yay! Copied to Clipboard!"}
          </GetButton>
          <GetButton onClick={textGetLink} id="get-link">
            {!textLink ? "Get Share Link" : "Yay! Copied to Clipboard!"}
          </GetButton>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
