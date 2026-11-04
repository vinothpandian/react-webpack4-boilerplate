# React animation starter

This former Webpack 4 starter now uses Vite and Dart Sass with React 16, Emotion 11, and React Spring's web package. The lazy-loaded screen retains its loading spinner, spring-animated title, illustration, and yellow background. React's built-in lazy/Suspense replaces react-loadable.

Requires Node.js 22.12+ and a modern ES2020 browser.

- `npm ci` (or Yarn 1 `yarn install --frozen-lockfile`): install dependencies.
- `npm start`: run the development server at http://localhost:8080.
- `npm run build`: create the production site in `dist/`.
- `npm test`: check the headline and illustration.

Edit `vite.config.mjs` for build/test settings. Autoprefixer remains configured in `postcss.config.js`; Vite handles CSS minification. The unused PostCSS utilities, lodash, and obsolete Webpack/Babel plugins are removed from this starter.
