// @flow
import React, { Component } from 'react';

import './App.scss';

type Props = {
};

export default class App extends Component<Props> {
  render() {
    return (
      <div styleName="App">
        <header styleName="App-header">
          <h1 styleName="App-title">Welcome to React</h1>
        </header>
      </div>
    );
  }
}
