import React, { Component } from "react";
import PropTypes from "prop-types";

import WeatherForm from "./components/WeatherForm/WeatherForm";
import api from "../../services/api";

class WeatherFormContainer extends Component {
  state = { text: "" };

  handleChange = e => {
    this.setState({ text: e.target.value });
  };

  handleSubmit = () => {
    api.fetchCurrentWeather(this.state.text);
  };

  render() {
    return (
      <WeatherForm
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
        {...this.props}
      />
    );
  }
}

WeatherFormContainer.propTypes = {
  row: PropTypes.bool
};

export default WeatherFormContainer;
