import React from "react";
import styled from "styled-components";

import Button from "./components/Button/Button";
import Input from "./components/Input/Input";

const Form = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  align-content: center;
`;

const WeatherForm = props =>
  <Form>
    <Input
      type="text"
      size={15}
      placeholder="St. George, Utah"
      value={props.text}
      onChange={props.onChange}
    />
    <Button>Get Weather</Button>
  </Form>;

export default WeatherForm;
