import styled from "styled-components";
import PropTypes from "prop-types";
import React from "react";

const WeatherIcon = styled.img`
  min-height: ${props => props.large && "100px"};
  @media (min-width: 768px) {
    min-height: 100px;
  }
`;

export default WeatherIcon;
