# Introduction

### This website is for our core open source project [Job Triage](https://github.com/jobtriage/jobtriage).
### You can checkout our core product  [Job Triage App](https://app.jobtriage.org/). It is an interactive way to manage your job applications.

## Motivation

The purpose of this website is to provide information and guidance to the users about the core product. We want to keep it separate from the web app to have more flexibility and to keep our web app more focused.

## Tech Stack

- [NextJS](https://nextjs.org/) 
- [ReactJS](https://reactjs.org/)
- [Emotion](https://emotion.sh/docs/@emotion/core) 

## Getting Started

First, run the development server:
```
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the pages. The page auto-updates as you edit the file.


## Testing

### Writing tests
We are using the following tools to write tests for the app.

- [Jest](https://jestjs.io/docs/en/getting-started) and [React-testing-library](https://testing-library.com/docs/react-testing-library/intro) for the unit and integration tests
- [Cypress.io](https://www.cypress.io/) for the integration and end to end tests

### How to run tests

- To run all the tests (jest + cypress),
```
yarn test
```
- To run only jest tests
```
yarn test:jest
```
- To run cypress tests with GUI
```
yarn dev:coverage

&&

yarn cy:open
```
- To run cypress tests in the terminal
```
yarn test:cy
```

### Test coverage
Once, you run the command `yarn test`, it will run all the tests and generate a combined test coverage report.

You can run `yarn open:coverage`  to open an html page with detailed coverage reports.