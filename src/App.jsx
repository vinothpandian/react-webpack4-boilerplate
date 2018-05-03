import React from 'react';
import styled from 'react-emotion';
import './styles.scss';

const sunGlasses = require('./Sunglasses-512.png');

const CenterContainer = styled('div')(props => ({
  height: '100%',
  display: 'flex',
  flexDirection: props.column && 'column',
  justifyContent: 'center',
  alignItems: 'center',
}));

const Title = styled('h1')`
  font-size: 4.5rem;
  font-weight: 500;
`;

const App = () => (
  <CenterContainer column>
    <Title>Oh!!! This works!</Title>
    <img src={sunGlasses} alt="Sun Glasses" />
  </CenterContainer>
);

export default App;
