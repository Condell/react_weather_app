import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Title from "../../../../../../../../components/Title/Title";
import WeatherIcon from "../../../../../../../../components/WeatherIcon/WeatherIcon"
import { unixToDate } from "../../../../../../../../services/helpers";

const DayWrapper = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;

  @media (min-width: 768px) {
    flex-flow: column;
    margin: 1em;
  }
`;

class Day extends React.Component {
  onHandleClick = () => {
    this.props.handleClick(
      this.props.thisDay,
      this.props.name,
      unixToDate(this.props.unixTime)
    );
  };

  render() {
    const formattedDate = unixToDate(this.props.unixTime);
    const icon = this.props.weatherIcon;
    return (
      <DayWrapper onClick={this.onHandleClick}>
        <WeatherIcon
          src={`http://openweathermap.org/img/w/${icon}.png`}
          alt={this.props.thisDay.weather[0].description}
        />
        <h2>
          {formattedDate}
        </h2>
      </DayWrapper>
    );
  }
}

export default Day;
