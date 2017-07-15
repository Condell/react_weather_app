import styled from "styled-components";
import React from "react";
import PropTypes from 'prop-types';

const Input = styled.input`
  background-color: white;
  border-radius: 5px;
  padding: .5em;
  margin: .5em;
`;

Input.propTypes = {
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  size: PropTypes.number,
  type: PropTypes.string,
}

export default Input;
