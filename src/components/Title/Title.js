import styled from "styled-components";
import PropTypes from 'prop-types';

const Title = styled.h1`
  font-family: 'Abel', sans-serif;
  color: ${props => props.whiteFont ? "white" : "black"};
  margin-top: 0px;
  margin-bottom: .5em;
  flex: none;
  align-self: center;
`;


export default Title;
