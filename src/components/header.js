import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Header = styled.header`
  display: grid;
  grid-template-columns: 1fr 2fr;
  margin: 2rem 0;

  ul {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-self:right;
  grid-gap:1em;
  li a {
  	text-decoration:none;
  	color:black;
  }
  }
`;


const Box = ({ children }) => <Header>{children}</Header>;

Box.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Box;
