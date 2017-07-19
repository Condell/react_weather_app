import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import DaysList from "./components/DaysList/DaysList";
import Title from "../../../../components/Title/Title";

const ForecastWrapper = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  text-align: center;
`;

const Forecast = props =>
  <ForecastWrapper {...props}>
    {props.isLoading === true
      ? <Title>Loading...</Title>
      : <div>
          <Title>
            5-day Forecast for {props.weatherData.city.name}:
          </Title>
          <DaysList data={props.weatherData} handleClick={props.handleClick} name={props.weatherData.city.name} />
        </div>}
  </ForecastWrapper>;

Forecast.propTypes = {
  weatherData: PropTypes.object
};

export default Forecast;
