import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { createLogger } from "redux-logger";
import logger from "../logger";
import thunk from "redux-thunk";
import initialState from "./initialState";
import * as appReducers from "./reducers/index";
import { routerReducer } from "react-router-redux";

const _logger = logger.extend("redux:store");

const reducerArgs = { ...appReducers, routing: routerReducer };

const rootReducer = combineReducers(reducerArgs);

const rLogger = createLogger();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(rLogger, thunk))
);

_logger("exporting initial store with state:", initialState);
_logger("exporting initial store with reducers", reducerArgs);

export default store;
