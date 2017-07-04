import React from "react";
import styled from "styled-components";

import pattern from "../images/pattern.svg";

const Home = styled.div`
  background-image: url(${pattern});
  background-size: 100% 100%;
  background-color: #fe9c42;
  min-height: 95vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-family: 'Abel', sans-serif;
  color: white;
`;

const Input = styled.input`
    background-color: white;
    border-radius: 5px;
    margin: 1em;
    padding: .5em;
`;

const Button = styled.button`
    background-color: #4CAF50;
    color: white;
    border-radius: 5px;
    padding: .5em 2em;
`;

export default () =>
  <Home>
    <Title>Enter a City and State</Title>
    <Input type='text' placeholder="St. George, Utah"/>
    <Button>Get Weather</Button>
  </Home>;
