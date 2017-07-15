import React from "react";
import styled from "styled-components";

const ForecastWrapper = styled.div`
  background-color: blue;
  font-size: 1.5em;
`;

const Forecast = () =>
  <ForecastWrapper>
    <h1>
      Forecast Component
    </h1>
  </ForecastWrapper>;

export default Forecast;
