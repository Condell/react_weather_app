import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Button = styled(Link)`
  font-family: "Arial";
  text-decoration: none;
  background-color: #4caf50;
  color: white;
  border-radius: 5px;
  padding: .5em;
  margin: .5em;
`;


export default Button;
