import ReactDOM from "react-dom";
import React, { Component }  from 'react';
import "./index.css";
import App from "../App";
import registerServiceWorker from "../serviceWorker";
import store from "./store";

const render = () => {
  fancyLog();
  return ReactDOM.render(<App />, document.getElementById("root"));
};

render();
store.subscribe(render);
registerServiceWorker();

function fancyLog() {
  console.log("%c Rendered with ? ??", "background: purple; color: #fff");
  console.log(store.getState());
}