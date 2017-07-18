import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Button from "./components/Button/Button";
import Input from "./components/Input/Input";

const Form = styled.div`
  display: flex;
  flex-flow: ${props => (props.row ? "row" : "column")};
  align-items: center;
  justify-content: space-around;
  flex: none;
`;

Form.propTypes = {
  onChange: PropTypes.func,
  children: PropTypes.array
};

const WeatherForm = props =>
  <Form {...props}>
    <Input
      type="text"
      size={15}
      placeholder="St. George, Utah"
      value={props.text}
      onChange={props.onChange}
    />

    <Button
      to={{
        pathname: "/forecast",
        search: `city=${props.text}`
      }}
    >
      Get Weather
    </Button>
  </Form>;

export default WeatherForm;
