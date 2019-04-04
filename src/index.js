import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const Button = props => {
  const [counter, setCounter] = useState();
  return <button>Test</button>;
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Button />, rootElement);
