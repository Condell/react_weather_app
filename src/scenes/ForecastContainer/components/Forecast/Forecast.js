import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import DaysList from "./components/DaysList/DaysList";
import Title from "../../../../components/Title/Title";

const ForecastWrapper = styled.div`background-color: white;`;

const Forecast = props =>
  <ForecastWrapper {...props}>
    {props.isLoading === true
      ? <h1>Loading...</h1>
      : <DaysList
          name={props.weatherData.city.name}
          data={props.weatherData}
        />}
  </ForecastWrapper>;

Forecast.propTypes = {
  weatherData: PropTypes.object
};



export default Forecast;
