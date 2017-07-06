import React from "react";
import styled from "styled-components";

import Input from "./shared/Input";
import Button from "./shared/Button";

const HeaderWrapper = styled.div`
  background-color: #f8642e;
  height: 20vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

const Title = styled.h1`
  font-family: 'Abel', sans-serif;
  margin: 0px;
  color: white;
`;

const SmallButton = styled(Button)`
    padding: .5em;
`;

const Header = () =>
  <HeaderWrapper>
    <Title>Weather App</Title>
    <Input type="text" placeholder="St. George, Utah" size="14" />
    <SmallButton>Get Weather</SmallButton>
  </HeaderWrapper>;

export default Header;
