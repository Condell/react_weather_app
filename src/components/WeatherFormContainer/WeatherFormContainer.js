import React, { Component } from "react";

import WeatherForm from './components/WeatherForm/WeatherForm'

class WeatherContainer extends Component {
  state = { text: "" };

  handleChange = e => {
    this.setState({ text: e.target.value });
  };

  render() {
    return (
      <WeatherForm onChange={this.handleChange}/>
    );
  }
}



export default WeatherContainer;
