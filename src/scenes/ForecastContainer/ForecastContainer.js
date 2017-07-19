import React, { Component } from "react";
import PropTypes from "prop-types";
import queryString from "query-string";
import { Redirect } from "react-router-dom";

import { fetch5DayForecast } from "../../services/api";
import Forecast from "./components/Forecast/Forecast";

class ForecastContainer extends Component {
  state = {
    weatherData: {},
    loading: true
  };

  handleClick = (day, name) => {
      this.props.history.push({
      pathname: `/detail/${name}`,
      state: day
    });
  }

  componentDidMount() {
    this.city = queryString.parse(this.props.location.search).city;
    fetch5DayForecast(this.city).then(res => {
      this.setState({
        weatherData: res,
        loading: false
      });
    });
  }

  componentWillReceiveProps(nextProps) {
    this.city = queryString.parse(nextProps.location.search).city;
    this.setState({
      loading: true
    });
    fetch5DayForecast(this.city).then(res => {
      this.setState({
        weatherData: res,
        loading: false
      });
    });
  }

  render() {
    return (
      <Forecast
        isLoading={this.state.loading}
        weatherData={this.state.weatherData}
        city={this.city}
        handleClick={this.handleClick}
      />
    );
  }
}

export default ForecastContainer;
