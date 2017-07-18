import React from "react";
import styled from "styled-components";

import WeatherFormContainer from "../WeatherFormContainer/WeatherFormContainer";
import Title from "../Title/Title";

const HeaderWrapper = styled.div`
  background-color: #f8642e;
  min-height: 20vh;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-around;
`;

const Header = () =>
  <HeaderWrapper>
    <Title whiteFont>Weather App</Title>
    <WeatherFormContainer row />
  </HeaderWrapper>;

export default Header;
