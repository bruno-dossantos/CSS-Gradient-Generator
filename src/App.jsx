import { useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import Picker from "./components/Picker/Picker";
import GetButton from "./components/GetButton/GetButton";
import Footer from "./components/Footer/Footer";
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
  const randomColor1 = `#${(Math.random() * 0xfffff * 1000000)
    .toString(16)
    .slice(0, 6)}`;
  const randomColor2 = `#${(Math.random() * 0xfffff * 1000000)
    .toString(16)
    .slice(0, 6)}`;
  const [textCSS, setTextCSS] = useState("");
  const [textLink, setTextLink] = useState("");
  const [radial, setRadial] = useState(false);
  const [color1, setColor1] = useState(randomColor1);
  const [color2, setColor2] = useState(randomColor2);
  const [direction, setDirection] = useState("left top");
  const directions = {
    TopLeft: "top left",
    Top: "top",
    TopRight: "top right",
    Left: "left",
    Center: "center",
    Right: "right",
    LeftBottom: "left bottom",
    Bottom: "bottom",
    RightBottom: "right bottom",
  };
  const [outputFormat, setOutputFormat] = useState("hex");
  const gradient = `${
    radial ? "-webkit-radial-gradient" : "-webkit-linear-gradient"
  }(${direction}, ${color1}, ${color2})`;
  const hexToRgb = (hex) => {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (result) {
      var r = parseInt(result[1], 16);
      var g = parseInt(result[2], 16);
      var b = parseInt(result[3], 16);
      return r + ", " + g + ", " + b;
    }
    return null;
  };
  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);
  const rgb = `${
    radial ? "-webkit-radial-gradient" : "-webkit-linear-gradient"
  }(${direction}, rgb(${rgb1}), rgb(${rgb2}));`;
  const getCSS = () => {
    setTextCSS(!textCSS);
    setTimeout(setTextCSS, 3000);
  };
  const getLink = () => {
    setTextLink(!textLink);
    setTimeout(setTextLink, 3000);
  };
  const randomColors = () => {
    setColor1(
      `#${(Math.random() * 0xfffff * 1000000).toString(16).slice(0, 6)}`
    );
    setColor2(
      `#${(Math.random() * 0xfffff * 1000000).toString(16).slice(0, 6)}`
    );
  };
  return (
    <div className="content">
      <div className="sidebar">
        <div className="content-header">
          <h1 className="title">CSS Gradient Generator</h1>
        </div>
        <span className="label">Style</span>
        <div className="style-content">
          <Button
            id={radial === true ? "" : "selected"}
            onClick={() => setRadial(false)}
          >
            Linear
          </Button>
          <Button
            id={radial === true ? "selected" : ""}
            onClick={() => setRadial(true)}
          >
            Radial
          </Button>
        </div>
        <span className="label">Direction</span>
        <div className="direction-content">
          <Button
            id={direction === "left top" ? "selected" : ""}
            onClick={() => setDirection(directions.TopLeft)}
          >
            <ImArrowUpLeft2 />
          </Button>
          <Button
            id={direction === "top" ? "selected" : ""}
            onClick={() => setDirection(directions.Top)}
          >
            <ImArrowUp2 />
          </Button>
          <Button
            id={direction === "right top" ? "selected" : ""}
            onClick={() => setDirection(directions.TopRight)}
          >
            <ImArrowUpRight2 />
          </Button>
          <Button
            id={direction === "left" ? "selected" : ""}
            onClick={() => setDirection(directions.Left)}
          >
            <ImArrowLeft2 />
          </Button>
          <Button
            id={direction === "center" ? "selected" : ""}
            onClick={() => setDirection(directions.Center)}
            style={{ visibility: radial ? "visible" : "hidden" }}
          >
            <FiCircle />
          </Button>
          <Button
            id={direction === "right" ? "selected" : ""}
            onClick={() => setDirection(directions.Right)}
          >
            <ImArrowRight2 />
          </Button>
          <Button
            id={direction === "left bottom" ? "selected" : ""}
            onClick={() => setDirection(directions.LeftBottom)}
          >
            <ImArrowDownLeft2 />
          </Button>
          <Button
            id={direction === "bottom" ? "selected" : ""}
            onClick={() => setDirection(directions.Bottom)}
          >
            <ImArrowDown2 />
          </Button>
          <Button
            id={direction === "right bottom" ? "selected" : ""}
            onClick={() => setDirection(directions.RightBottom)}
          >
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
          <Button onClick={randomColors}>Random</Button>
        </div>
        <span className="label">Output format</span>
        <div className="output-content">
          <Button
            id={outputFormat === "hex" ? "selected" : ""}
            onClick={() => setOutputFormat("hex")}
          >
            Hex
          </Button>
          <Button
            id={outputFormat === "rgba" ? "selected" : ""}
            onClick={() => setOutputFormat("rgba")}
          >
            Rgba
          </Button>
        </div>
        <div className="get-content">
          <CopyToClipboard
            text={
              outputFormat === "hex"
                ? "background: " + gradient
                : "background: " + rgb
            }
          >
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
      <div id="si" className="gradient" style={{ background: gradient }}></div>
    </div>
  );
}
export default App;
