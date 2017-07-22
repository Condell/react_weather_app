import React from "react";
import styled from "styled-components";

import WeatherIcon from "../../components/WeatherIcon/WeatherIcon";

const DetailWrapper = styled.div`
  font-family: 'Abel', sans-serif;
  text-align: center;
`;

const Detail = (props, match) =>
  <DetailWrapper>
    <WeatherIcon
      large
      src={`http://openweathermap.org/img/w/${props.location.state.weather[0]
        .icon}.png`}
      alt={`${props.location.state.weather[0].description} icon`}
    />
    <h2>
      {props.location.state.date}
    </h2>
    <h2>
      {props.match.params.cityName}
    </h2>
    <h2>
      Forecast: {props.location.state.weather[0].description}
    </h2>
    <h2>
      Low Temperature: {Math.round(props.location.state.temp.min)} °F
    </h2>
    <h2>
      High Temperature: {Math.round(props.location.state.temp.max)} °F
    </h2>
    <h2>
      Humidity:{" "}
      {props.location.state.humidity === 0
        ? "Unlisted"
        : props.location.state.humidity}
    </h2>
  </DetailWrapper>;

export default Detail;
