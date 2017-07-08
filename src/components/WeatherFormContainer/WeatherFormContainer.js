import React, { Component } from "react";

import WeatherForm from './components/WeatherForm/WeatherForm'

class WeatherFormContainer extends Component {
  state = { text: "" };

  handleChange = e => {
    this.setState({ text: e.target.value });
  };

  render() {
    return (
      <WeatherForm onChange={this.handleChange} {...this.props}/>
    );
  }
}



export default WeatherFormContainer;
