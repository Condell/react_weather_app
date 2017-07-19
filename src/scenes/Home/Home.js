import React from "react";
import styled from "styled-components";

import pattern from "./images/pattern.svg";
import WeatherContainer from "../../components/WeatherFormContainer/WeatherFormContainer";
import Title from "../../components/Title/Title";

const HomeWrapper = styled.div`
  background-image: url(${pattern});
  background-size: 100% 100%;
  background-color: #fe9c42;
  min-height: 80vh;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  text-align: center;
`;

const Home = () =>
  <HomeWrapper>
    <Title whiteFont>Enter a City and State, or a ZIP Code</Title>
    <WeatherContainer />
  </HomeWrapper>;

export default Home;
