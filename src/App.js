import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./scenes/Home/Home";
import Forecast from "./scenes/Forecast/Forecast";
import Header from "./components/Header/Header";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/forecast/:city" component={Forecast} />
        </Switch>
      </div>
    );
  }
}

export default App;
