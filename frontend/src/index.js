import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import "./index.css";
import "./main.css";
// import "./Main.js";

import * as serviceWorker from "./serviceWorker";
import Home from "./Home";
import { BrowserRouter, Route, Link } from "react-router-dom";
import store from './store'

ReactDOM.render(
  <>
    <BrowserRouter>
    <Provider store={store}>
      <Home /> 
      </Provider>
    </BrowserRouter>
  </>,
  document.getElementById("root")
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
