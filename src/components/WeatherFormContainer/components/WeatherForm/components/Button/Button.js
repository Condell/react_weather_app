import styled from "styled-components";
import PropTypes from 'prop-types';

const Button = styled.button`
  background-color: #4caf50;
  color: white;
  border-radius: 5px;
  padding: .5em;
  margin: .5em;
`;

Button.propTypes = {
  children: PropTypes.string,
}

export default Button;
