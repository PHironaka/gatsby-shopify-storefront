import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MEDIA from '../helpers/mediaTemplates';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 4rem;
  margin: 2rem 0;
${MEDIA.TABLET`
    display: block;
  `};
`;


const Box = ({ children }) => <Container>{children}</Container>;

Box.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Box;
