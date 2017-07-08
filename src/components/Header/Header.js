import React from "react";
import styled from "styled-components";

import WeatherFormContainer from "../WeatherFormContainer/WeatherFormContainer";
import Title from '../Title/Title'

const HeaderWrapper = styled.div`
  background-color: #f8642e;
  height: 15vh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  align-content: center;
`;


const Header = () =>
  <HeaderWrapper>
    <Title>Weather App</Title>
    <WeatherFormContainer />
  </HeaderWrapper>;

export default Header;
