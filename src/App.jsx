import React from 'react';
import styled from '@emotion/styled';
import { Spring, animated } from '@react-spring/web';
import './styles.scss';

import sunGlasses from './Sunglasses-512.png';

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

const SpringTitle = animated(Title);

const AnimatedTitle = props => (
  <Spring
    from={{ fontSize: '1rem', opacity: 0 }}
    to={{ fontSize: '7rem', opacity: 1 }}
    config={{ tension: 200, friction: 8 }}
  >
    {styles => <SpringTitle style={styles}>{props.children}</SpringTitle>}
  </Spring>
);

const App = () => (
  <CenterContainer column>
    <AnimatedTitle>Oh!!! This works!</AnimatedTitle>
    <img src={sunGlasses} alt="Sun Glasses" />
  </CenterContainer>
);

export default App;
