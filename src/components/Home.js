import React from "react";
import styled from "styled-components";

import pattern from "../images/pattern.svg";
import Input from "./shared/Input";
import Button from "./shared/Button";

const HomeWrapper = styled.div`
  background-image: url(${pattern});
  background-size: 100% 100%;
  background-color: #fe9c42;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 0px;
`;

const Title = styled.h1`
  font-family: 'Abel', sans-serif;
  color: white;
`;

const Home = () =>
  <HomeWrapper>
    <Title>Enter a City and State</Title>
    <Input type="text" placeholder="St. George, Utah" />
    <Button>Get Weather</Button>
  </HomeWrapper>;

export default Home;
