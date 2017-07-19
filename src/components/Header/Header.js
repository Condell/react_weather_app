import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import WeatherFormContainer from "../WeatherFormContainer/WeatherFormContainer";
import Title from "../Title/Title";

const HeaderWrapper = styled.div`
  background-color: #f8642e;
  min-height: 20vh;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-around;

  > a {
    text-decoration: none;
  }

  @media (min-width: 768px) {
    flex-flow: row;
  }
`;

const Header = () =>
  <HeaderWrapper>
    <Link to={"/"}><Title whiteFont>Weather App</Title></Link>
    <WeatherFormContainer row />
  </HeaderWrapper>;

export default Header;
