import React, { Component } from "react";
import styled from "styled-components";

import Home from "./Home";
import Header from "./Header";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Home />
      </div>
    );
  }
}

export default App;
