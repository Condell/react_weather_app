import React, { Component } from "react";
import PropTypes from "prop-types";
import queryString from "query-string";

import { fetchCurrentWeather } from "../../services/api";
import Forecast from "./components/Forecast";

class ForecastContainer extends Component {
  state = {
    currentWeather: [],
    loading: true
  };

  componentDidMount() {
    const city = queryString.parse(this.props.location.search).city;
    fetchCurrentWeather(city).then(data => {
      this.setState({
        loading: false
      });
      console.log(data);
    });
  }

  render() {
    return (
      <Forecast
        isLoading={this.state.loading}
      />
    );
  }
}

export default ForecastContainer;
