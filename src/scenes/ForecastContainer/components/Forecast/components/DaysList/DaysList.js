import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Day from "./components/Day/Day";

const DaysListWrapper = styled.div`
  font-family: 'Abel', sans-serif;
  background-color: white;
  text-align: center;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`;

const DaysList = props =>
  <DaysListWrapper {...props}>
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
