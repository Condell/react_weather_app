import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./scenes/Home/Home";
import ForecastContainer from "./scenes/ForecastContainer/ForecastContainer";
import Header from "./components/Header/Header";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/forecast" component={ForecastContainer} />
          <Route render={() => <h1>Page Not Found</h1>}/>
        </Switch>
      </div>
    );
  }
}

export default App;
