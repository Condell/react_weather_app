import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Title from "../../../../../../../../components/Title/Title"
import { unixToDate } from "../../../../../../../../services/helpers"

const DayWrapper = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
`;

const Day = props => {
  const formattedDate = unixToDate(props.unixTime);
  const icon = props.weatherIcon;
  return (
    <DayWrapper {...props}>
      <img
        src={`http://openweathermap.org/img/w/${icon}.png`}
      />
      <h3>
        {formattedDate}
      </h3>
    </DayWrapper>
  );
};

export default Day;
