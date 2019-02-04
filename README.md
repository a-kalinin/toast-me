#alexkalinin-boilerplate

## Table of Contents
* [Introduction](#introduction)
* [Getting started](#getting-started)
* [Structure](#structure)
  * [Files structure](#files-structure)
  * [Path alias](#path-alias)
  * [Git repository architecture](#git-repository-architecture)
  * [Redux state](#redux-state)
* [Dependencies](#dependencies)
* [API](#api)
* [Guidelines](#guidelines)
* [Useful links](#useful-links)



## Introduction
[Here will be project description.]


## Getting started
You will need [node.js](https://nodejs.org/en/) and [yarn](https://yarnpkg.com/lang/en/)
 to run the project.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app),
and then ejected with `yarn eject` command.

Copy project to your local folder and then run in project's root
folder next command to load dependencies:

```
yarn
```

Now you can run several commands:
* to run development server with hot-module-reload

```
yarn start
```

* to create production pack

```
yarn build
```

* to create production pack and run in on local server
(on [http://localhost:5000](http://localhost:5000))

```
yarn build-n-run
```

* to run test suits

```
yarn test
```

* to run ESLint checker

```
yarn lint
```

* to run and open `react-styleguidist` server on [http://localhost:6060/](http://localhost:6060/)

```
yarn styleguide
```

* to create `react-styleguidist` documentation in specific folder `/config/styleguide/`

```
yarn styleguide:build
```


## Structure
### Files structure
* `Root folder`
  * `config/` - folder, containing configuration files for different libraries
                and frameworks, not directly used from source code (i.e. webpack config).
  * `public/` - keeps public files for production pack.
  * `scripts/` - Node.js executable scripts' folder, such as `start.js` or `test.js`.
  * `src/`
    * `assets/` - assets folder. Contains images, icons, fonts, styles, etc.
      * `index.scss` - index file to enable (include) common SASS files
    * `components/` - components' folder

  * `.env files` - DotEnv configuration files.
  * `.babelrc` - Babel configuration file.
  * `.eslint files` - ESLint configuration files.
  * `.gitignore` - gitignore file.
  * `.flowconfig` - FlowJS configuration file.
  * `package.json` - NodeJS package.json file,
                     keeps configuration for NodeJS and different packages.
  * `README.md` - README file.
  * `yarn.lock` - Yarn-lock file with packages' versions.


## Dependencies
### Main stack

* `react` - provides reactive coding tools.
* `react-router` - processes url to react component route.
* `redux-thunk` - provides app's global data storage.
* `redux-persist` - make possible to "hydrate" react state.
* `babel` - ES6+ to ES5 compiling.
* `eslint` - coding standards.
* `jest` - unit testing.
* `enzyme` - react-components testing.
* `sass` - CSS pre-compiler.
* `webpack` - runs dev-server and creates production pack.
* `dotenv` - environment-related variables support.
* `i18next` - for internationalization.
* `react-transition-group` - for CSS transition
* `react-styleguidist` - tool for documenting all react components
                         within `components/` folder

For more information check [package.json](package.json) file.

## API
Nothing here yet, unless RestAPI will be built


## Guidelines
1. Use code standard checking with ESLint and
   [AirBnB Style Guide](https://airbnb.io/javascript/).
   We have this check enabled within IDE, and that is very useful and comfortable.
1. Also you should maximally cover your code with unit-tests while it is possible.
   [Test-driven development (TDD)](https://en.wikipedia.org/wiki/Test-driven_development)
   ([russian](https://ru.wikipedia.org/wiki/%D0%A0%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B0_%D1%87%D0%B5%D1%80%D0%B5%D0%B7_%D1%82%D0%B5%D1%81%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5))
   is preferred, but not strictly needed.
1. Any new user-interface components, such as buttons and inputs should
   be placed in `components/UI/` and their stylesheets in `assets/Components/UI/`.
1. Non-reusable components should be placed in the `sub` folder of it's parent component,
   and not in `components/`. For usability they can be imported in/exported from parent component. 
   But if you have side usage of them - check it, probably you need to extract them
   to standalone components on top level.
1. All user-interface elements such as buttons, inputs, other form elements should be
   placed in 'components/UI' folder and named with prefix `UI`.
1. Local styles of component should be placed sibling to component, within same folder folder,
   have same name as component file (`index.js`, `index.scss`), and not in `assets/`.
1. Every time you removing link to image - check if there is no more links,
   and if so - move file to `assets/images/_unlinked_`. That is the storage for unused images.
1. Create Git repository branches accordingly [git-flow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow).
1. Avoid create one huge commit with a lot of changes and files.
   Split it logically to several smaller commits.
1. After creating component in `components/` folder, add `Readme.md` example
   file for [react-styleguidist](https://react-styleguidist.js.org/docs/getting-started). 

## Useful links
1. [Git-flow workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)
1. [React-Styleguidist documentation](https://react-styleguidist.js.org/docs/getting-started)
1. [AirBnB Style Guide](https://airbnb.io/javascript/)
1. [Test-driven development (TDD)](https://en.wikipedia.org/wiki/Test-driven_development)
   ([russian](https://ru.wikipedia.org/wiki/%D0%A0%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B0_%D1%87%D0%B5%D1%80%D0%B5%D0%B7_%D1%82%D0%B5%D1%81%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5))
1. [React-Transition-Group](https://github.com/reactjs/react-transition-group/tree/v1-stable)
1. [i18next](https://www.i18next.com/)
1. [React-i18next](https://react.i18next.com/)
1. [Webpack](https://webpack.js.org/)
1. [Dotenv](https://github.com/motdotla/dotenv)
1. [Node.js](https://nodejs.org/en/)
1. [Yarn](https://yarnpkg.com/lang/en/)
1. [SASS](http://sass-lang.com/) ([russian](https://sass-scss.ru/))
1. [Jest - main documentation](https://jestjs.io/docs/en/getting-started)
1. [Jest - testing React](https://jestjs.io/docs/en/tutorial-react)
1. [Enzyme](https://github.com/airbnb/enzyme)
1. [Jest - testing Redux](https://redux.js.org/recipes/writingtests)
