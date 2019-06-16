import { createStore, applyMiddleware, combineReducers, compose } from "redux"; //combineReducers,
import logger from "../logger";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import * as appReducers from "./reducers";
import initialState from "./appState";

const _logger = logger.extend("redux:store");

const reducerArgs = { ...appReducers };

const reducers = combineReducers(reducerArgs);

const rLogger = createLogger();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//const store = createStore(reducer, /* preloadedState, */ composeEnhancers(

const store = createStore(
  reducers,
  initialState, // any initial state you want to set
  composeEnhancers(applyMiddleware(rLogger, thunk))
);

_logger("exporting initial store with state:", initialState);
_logger("exporting initial store with reducers", reducerArgs);

export default store;
