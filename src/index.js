import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./Component/App/App";
import { store, persistor } from "./store";
import history from "./history";
import * as serviceWorker from "./serviceWorker";
import { PersistGate } from "redux-persist/integration/react";
import Spinner from "./Component/Spinner/Spinner";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<Spinner />} persistor={persistor}>
      <Router history={history}>
        <App />
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
