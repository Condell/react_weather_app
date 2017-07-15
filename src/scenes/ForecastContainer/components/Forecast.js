import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const ForecastWrapper = styled.div`
  background-color: blue;
  font-size: 1.5em;
`;

const Forecast = props =>
  <ForecastWrapper>
    {props.isLoading === true
      ? <h1>Loading...</h1>
      : <h1>Forecast Component</h1>}
  </ForecastWrapper>;

Forecast.propTypes = {
  isLoading: PropTypes.bool.isRequired
};

export default Forecast;
