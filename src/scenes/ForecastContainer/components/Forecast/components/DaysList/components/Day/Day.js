import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Title from "../../../../../../../../components/Title/Title";
import { unixToDate } from "../../../../../../../../services/helpers";

const DayWrapper = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
`;

class Day extends React.Component {
  onHandleClick = () => {
    this.props.handleClick(this.props.thisDay, this.props.name)
  };

  render() {
    const formattedDate = unixToDate(this.props.unixTime);
    const icon = this.props.weatherIcon;
    return (
      <DayWrapper onClick={this.onHandleClick}>
        <img src={`http://openweathermap.org/img/w/${icon}.png`} />
        <h3>
          {formattedDate}
        </h3>
      </DayWrapper>
    );
  }
}

export default Day;
