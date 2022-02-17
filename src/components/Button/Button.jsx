/* import { useState } from "react";
 */import "./Button.css";

const Button = (props) => {
/*   const [selected, setSelected] = useState(false);
  function handleClick() {
    setSelected(!selected);
  } */
  return (
    <button
      {...props}
/*       onClick={handleClick}
      id={selected ? "selected" : ""} */
      className="btn"
    ></button>
  );
};

export default Button;
