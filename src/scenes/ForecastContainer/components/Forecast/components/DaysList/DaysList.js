import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Day from "./components/Day/Day";
import Title from "../../../../../../components/Title/Title";

const DaysListWrapper = styled.div`
  font-family: 'Abel', sans-serif;
  background-color: white;
  text-align: center;
`;

const DaysList = props =>
  <DaysListWrapper {...props}>
    <h2>
      5-day Forecast for {props.name}
    </h2>
    {props.data.list.map((day, index) => {
      return (
        <Day
          key={index}
          unixTime={day.dt}
          weatherIcon={day.weather[0].icon}
          thisDay={day}
          name={props.name}
          handleClick={props.handleClick}
        />
      );
    })}
  </DaysListWrapper>;

export default DaysList;
