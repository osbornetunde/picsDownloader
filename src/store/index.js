import { createStore, applyMiddleware, compose } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "../reducers";

const initialState = {};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk, logger))
);

export const persistor = persistStore(store);
