import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

it('retains the animated headline and bundled illustration', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: 'Oh!!! This works!' })).toBeInTheDocument();
  expect(screen.getByAltText('Sun Glasses').src).toContain('Sunglasses-512.png');
});
