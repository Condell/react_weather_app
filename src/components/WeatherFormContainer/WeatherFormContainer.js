import React, { Component } from "react";
import PropTypes from "prop-types";

import WeatherForm from "./components/WeatherForm/WeatherForm";

class WeatherFormContainer extends Component {
  state = { text: "" };

  handleChange = e => {
    this.setState({ text: e.target.value });
  };

  render() {
    return (
      <WeatherForm
        onChange={this.handleChange}
        text={this.state.text}
        {...this.props}
      />
    );
  }
}

WeatherFormContainer.propTypes = {
  row: PropTypes.bool
};

export default WeatherFormContainer;
