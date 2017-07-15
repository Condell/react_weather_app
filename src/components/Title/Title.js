import styled from "styled-components";
import PropTypes from 'prop-types';

const Title = styled.h1`
  font-family: 'Abel', sans-serif;
  color: white;
  margin-top: 0px;
  margin-bottom: .5em;
  flex: none;
`;

Title.propTypes = {
  children: PropTypes.string,
}

export default Title;
