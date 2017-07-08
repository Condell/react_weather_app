import React from "react";
import styled from "styled-components";

import pattern from "./images/pattern.svg";
import WeatherContainer from '../../components/WeatherFormContainer/WeatherFormContainer';
import Title from '../../components/Title/Title'

const HomeWrapper = styled.div`
  background-image: url(${pattern});
  background-size: 100% 100%;
  background-color: #fe9c42;
  height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 0px;
`;

const Home = () =>
  <HomeWrapper>
    <Title>Enter a City and State</Title>
    <WeatherContainer/>
  </HomeWrapper>;

export default Home;
