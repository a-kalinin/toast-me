# toast-me
[![npm version](https://badge.fury.io/js/toast-me.svg)](https://badge.fury.io/js/toast-me)
[![Build Status](https://travis-ci.org/a-kalinin/toast-me.svg?branch=master)](https://travis-ci.org/a-kalinin/toast-me)

Tiny, easy to use tool to show toast-like notifications on the web page.

![Demo](https://alexkalinin.ru/works/toast-me/toast-demo.gif)

## Features

* Exported in a [umd](https://github.com/umdjs/umd) format so works everywhere.
* Customizable
* Light-weight (15kB until gzip, 5kB zipped)
* Supports actions

## How to use
#### Import
Install package from npm
```
yarn add toast-me
# or
npm install toast-me
```

#### Add module to your script
```javascript
import toast from 'toast-me';
```

#### Use it
```javascript
toast('My message');
```

#### Use it with own customization
```javascript
toast('My message', { duration: 3000, toastClass: 'my-toast-class' /* ... */ });
```

## Toast function arguments
```javascript
toast(message, [options, [action]]);
```
Function accepts three arguments:
* `message` - message to show in toast,
* `options` - toast customization options,
* `action` - some action button options.

#### Message argument

Accepts `string`, any message to put in toast.
Text shown in one line, no wraps allowed.
Overflowed text will be hidden with ellipsis.
Complete text shown on hover with the `title` attribute on toast node.

#### Options argument

**Optional** - Accepts `object` with any allowed fields, or `string` as a name of options preset, or `null`.
If you don't need to set options, but need to pass an action - pass `null` instead options.

##### Accepted options
* `position` - *string*, one of `"top"` `"bottom"`. Default `"top"`.
* `toastClass` - *string*, CSS class name for toast node, can be used for custom toast styling.
Default `""` - empty string
* `closeable` - *boolean*, enables/hides "close" button on toast. Default `true`
* `timeoutOnRemove` - *number*, time in ms, till node should be removed from DOM after toast hides.
Can be useful when you change hide animation by CSS and set new animation duration.
To avoid element disappearing until animation ends set this option to larger or equal
value than animation duration. Default `1000`
* `duration` - *number*, time in ms, how long should toast be shown. Default `5000`

##### Options presets

* `default` - all default options,
* `error` - everything default, except background color - `#D40D00`

#### Action argument

**Optional** - Accepts object with three fields:
* `label` - *string*, text to put in button.
* `action` - callback *function* - to be called on button click.
* `class` - *string*, CSS class for button node.


#Contributing

%%%%%%%%%%%%%%%%%%%%%%%%%

SECTION BELOW IS IN WORK

%%%%%%%%%%%%%%%%%%%%%%%%%

## Getting started


## Scripts

* `yarn build` or `npm run build` - produces production version of your library under the `lib` folder
* `yarn run-dev` or `npm run run-dev` - produces development version of your library, runs a watcher and http server on http://localhost:3005
* `yarn test` or `npm run test` - well ... it runs the tests :)

## Readings

## Misc

### An example of using dependencies that shouldn’t be resolved by webpack, but should become dependencies of the resulting bundle

In the following example we are excluding React and Lodash:

```js
{
  devtool: 'source-map',
  output: {
    path: '...',
    libraryTarget: 'umd',
    library: '...'
  },
  entry: '...',
  ...
  externals: {
    react: 'react'
    // Use more complicated mapping for lodash.
    // We need to access it differently depending
    // on the environment.
    lodash: {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: '_',
      root: '_'
    }
  }
}
```
