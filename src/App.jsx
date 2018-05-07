import React from 'react';
import styled from 'react-emotion';
import { Spring } from 'react-spring';
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

const AnimatedTitle = props => (
  <Spring
    from={{ fontSize: '1rem', opacity: 0 }}
    to={{ fontSize: '7rem', opacity: 1 }}
    config={{ tension: 200, friction: 8 }}
  >
    {styles => <Title style={styles}>{props.children}</Title>}
  </Spring>
);

const App = () => (
  <CenterContainer column>
    <AnimatedTitle>Oh!!! This works!</AnimatedTitle>
    <img src={sunGlasses} alt="Sun Glasses" />
  </CenterContainer>
);

export default App;
