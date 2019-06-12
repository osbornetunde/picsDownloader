import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./Component/App/App";
import store from "./store";
import history from "./history";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
