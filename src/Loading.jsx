import React from 'react';
import styled, { keyframes } from 'react-emotion';

const CenterContainer = styled('div')(props => ({
  height: '100%',
  display: 'flex',
  flexDirection: props.column && 'column',
  justifyContent: 'center',
  alignItems: 'center',
}));

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Spinner = styled.div`
  border: 0.8rem solid #f3f3f3;
  border-top: 0.8rem solid #030303;
  border-radius: 50%;
  width: 6rem;
  height: 6rem;
  animation: ${spin} 2s linear infinite;
`;

const Loading = () => (
  <CenterContainer>
    <Spinner />
  </CenterContainer>
);

export default Loading;
