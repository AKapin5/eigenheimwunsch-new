import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import reportWebVitals from "./reportWebVitals";
import "./assets/css/main.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";

import { createRenderer } from "fela";
import { RendererProvider } from "react-fela";

const renderer = createRenderer();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <RendererProvider renderer={renderer}>
        <App />
      </RendererProvider>
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
