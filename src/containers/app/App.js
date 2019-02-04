// @flow
import React, { Component } from 'react';
import ToastMe from '../../lib';

import './App.scss';

type Props = {
};

export default class App extends Component<Props> {
  showTextMessage = () => {
    ToastMe('blablabla');
  };

  showErrorMessage = () => {
    ToastMe('blablabla', 'error');
  };

  render() {
    return (
      <div styleName="App">
        <header styleName="App-header">
          <h1 styleName="App-title">Welcome to React</h1>
        </header>

        <br />

        <button
          type="button"
          onClick={this.showTextMessage}
        >
          text
        </button>

        <br />
        <br />

        <button
          type="button"
          onClick={this.showErrorMessage}
        >
          error
        </button>
      </div>
    );
  }
}
