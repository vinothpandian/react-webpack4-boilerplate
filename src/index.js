import React from 'react';
import { render } from 'react-dom';
import Loading from './Loading';
import Loadable from 'react-loadable';

const App = Loadable({
  loader: () => import('./App'),
  loading: Loading,
});

// eslint-disable-next-line
render(<App />, document.querySelector('#root'));
