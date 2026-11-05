import React, { lazy, Suspense } from 'react';
import { render } from 'react-dom';
import Loading from './Loading';
const App = lazy(() => import('./App'));
render(<Suspense fallback={<Loading />}><App /></Suspense>, document.querySelector('#root'));
