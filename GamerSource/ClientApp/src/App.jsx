// import React from 'react';
// import { Route } from 'react-router';
// import Layout from './components/Layout';
// import Home from './components/Home';
// import Counter from './components/Counter';
// import FetchData from './components/FetchData';

// export default () => (
//   <Layout>
//     <Route exact path='/' component={Home} />
//     <Route path='/counter' component={Counter} />
//     <Route path='/fetch-data/:startDateIndex?' component={FetchData} />
//   </Layout>
// );

import React, { Component } from "react";
import logger from "./logger";
import { Route, withRouter } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Structures from "./components/Structures";
import ColorNavbar from "./components/ColorNavbar.jsx";
import RegisterPage from "./components/RegisterPage";
import AccountSettings from "./components/AccountSettings";

const _logger = logger.extend("timgonzo");

class App extends Component {
  state = { isLocalSetUp: false, storeValue: "", nsKeys: [] };

  componentDidMount() {
    _logger("componentDidMount");
    let isLocalSetUp = false;
    let storeValue = localStorage.getItem("debug");
    let nsKeys = [];
    if (storeValue) {
      isLocalSetUp = true;
      nsKeys = storeValue.split(",");
    }

    this.setState({ isLocalSetUp, storeValue, nsKeys });
  }
  onSetDebug = () => {
    localStorage.setItem(
      "debug",
      "timgonzo*,timgonzo:App,timgonzo:redux:store,timgonzo:redux:reducers*,timgonzo:redux:actions"
    );

    window.location.reload();
  };
  render() {
    return (
      <div className="App">
        <ColorNavbar />
        <Route exact path="/" component={LandingPage} />
        <Route path="/structures" component={Structures} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/account/settings" component={AccountSettings} />
      </div>
    );
  }
}

export default withRouter(App);
