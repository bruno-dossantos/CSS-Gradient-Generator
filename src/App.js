import { useState } from "react";
import "./App.css";
import Button from "./components/Button/Button.js";
import Picker from "./components/Picker/Picker";
import GetButton from "./components/GetButton/GetButton";
import Footer from "./components/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CopyToClipboard } from "react-copy-to-clipboard";
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
  const randomColor1 = Math.floor(Math.random() * 16777215).toString(16);
  const randomColor2 = Math.floor(Math.random() * 16777215).toString(16);
  const [darkMode, setDarkMode] = useState(true);
  const [textCSS, setTextCSS] = useState("");
  const [textLink, setTextLink] = useState("");
  const [radial, setRadial] = useState(true);
  const [color1, setColor1] = useState("#" + randomColor1);
  const [color2, setColor2] = useState("#" + randomColor2);
  const [direction, setDirection] = useState("left top");
  const gradient = `${
    radial ? "-webkit-radial-gradient" : "-webkit-linear-gradient"
  }(${direction}, ${color1}, ${color2})`;
  const getCSS = () => {
    setTextCSS(!textCSS);
    setTimeout(setTextCSS, 3000);
  };
  const getLink = () => {
    setTextLink(!textLink);
    setTimeout(setTextLink, 3000);
  };
  return (
    <div className="content">
      <div className="sidebar">
        <div className="content-header">
          <h1 className="title">CSS Gradient Generator</h1>
        </div>
        <span className="label">Style</span>
        <div className="style-content">
          <Button onClick={() => setRadial(false)}>Linear</Button>
          <Button onClick={() => setRadial(true)}>Radial</Button>
        </div>
        <span className="label">Direction</span>
        <div className="direction-content">
          <Button onClick={() => setDirection("left top")}>
            <ImArrowUpLeft2 />
          </Button>
          <Button onClick={() => setDirection("top")}>
            <ImArrowUp2 />
          </Button>
          <Button onClick={() => setDirection("right top")}>
            <ImArrowUpRight2 />
          </Button>
          <Button onClick={() => setDirection("left")}>
            <ImArrowLeft2 />
          </Button>
          <Button
            onClick={() => setDirection("center")}
            style={{ visibility: radial ? "visible" : "hidden" }}
          >
            <FiCircle />
          </Button>
          <Button onClick={() => setDirection("right")}>
            <ImArrowRight2 />
          </Button>
          <Button onClick={() => setDirection("left bottom")}>
            <ImArrowDownLeft2 />
          </Button>
          <Button onClick={() => setDirection("bottom")}>
            <ImArrowDown2 />
          </Button>
          <Button onClick={() => setDirection("right bottom")}>
            <ImArrowDownRight2 />
          </Button>
        </div>
        <span className="label">Colors</span>
        <div className="colors-content">
          <Picker
            value={color1}
            onChange={(e) => setColor1(e.target.value)}
          ></Picker>
          <Picker
            value={color2}
            onChange={(e) => setColor2(e.target.value)}
          ></Picker>
          <Button>Random</Button>
        </div>
        <span className="label">Output format</span>
        <div className="output-content">
          <Button>Hex</Button>
          <Button>Rgba</Button>
        </div>
        <div className="get-content">
          <CopyToClipboard text={"background: " + gradient}>
            <GetButton onClick={getCSS} id="get-css">
              {!textCSS ? "Get CSS" : "Yay! Copied to Clipboard!"}
            </GetButton>
          </CopyToClipboard>
          <GetButton onClick={getLink} id="get-link">
            {!textLink ? "Get Share Link" : "Yay! Copied to Clipboard!"}
          </GetButton>
        </div>
        <Footer />
      </div>
      <div className="gradient" style={{ background: gradient }}></div>
    </div>
  );
}

export default App;
