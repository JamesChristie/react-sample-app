# React Sample App

This repository is an example app built using React and ReactDOM utilizing ES2015, Babel, and Webpack. For testing, Jasmine and Karma are provided with basic configuration for launching tests in Chrome.

As this project was produced for use in a training class, it includes some default workspace settings for VSCode related to indentation and visuals. These are not necessary for other applications of this codebase.

### Requirements

This application requires `node` and `npm` to be present in order to build. After cloning the repository, run `npm install` in the application's root directory.

### Running

To try out the application in a browser, run `npm start` and navigate to `http://localhost:4200/`.

### Linting

The codebase, tests and source, can be linted via `npm run lint`.

### Tests

The test suite can be run with `npm test`. Additionally, the tests can be run in persistent watch mode with `npm run test:watch`.

Additionally, a CI task is provided that both lints and runs all tests via `npm run ci`.

### Building

The application can be built in production mode by running `npm run build`. The output for deployment will be the contents on the `public/` directory: `index.html` and `react-sample-app.js` files should be present.
