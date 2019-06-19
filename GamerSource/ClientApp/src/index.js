// import "bootstrap/dist/css/bootstrap.css";
// import React from "react";
// import ReactDOM from "react-dom";
// import { Provider } from "react-redux";
// import { ConnectedRouter } from "react-router-redux";
// import { createBrowserHistory } from "history";
// import configureStore from "./store/configureStore";
// import App from "./App";
// // import registerServiceWorker from "./registerServiceWorker";

// // Create browser history to use in the Redux store
// const baseUrl = document.getElementsByTagName("base")[0].getAttribute("href");
// const history = createBrowserHistory({ basename: baseUrl });

// // Get the application-wide store instance, prepopulating with state from the server where available.
// const initialState = window.initialReduxState;
// const store = configureStore(history, initialState);

// const rootElement = document.getElementById("root");

// ReactDOM.render(
//   <Provider store={store}>
//     <ConnectedRouter history={history}>
//       <App />
//     </ConnectedRouter>
//   </Provider>,
//   rootElement
// );

// registerServiceWorker();

import React from "react";
import ReactDOM from "react-dom";
//import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./state/store";

// styles
import "./assets/css/nucleo-icons.css";
import "./assets/scss/blk-design-system-pro-react.scss?v1.0.0";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
