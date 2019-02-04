// @flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from 'actions/test';
import * as thunk from 'thunk/app';
import logo from 'assets/images/logo.svg';
import './App.scss';

type Props = {
  /** @ignore */
  counter: number,
  /** @ignore */
  first: boolean,
  /** @ignore */
  testAction: () => {},
  /** @ignore */
  asyncCounter: () => {},
};

/**
 * General component description in JSDoc format. Markdown is *supported*.
 *
 * @visibleName The Best Button Ever 🐙
 */
@connect(
  state => ({
    counter: state.app.counter,
    first: state.app.first,
  }),
  dispatch => bindActionCreators({
    testAction: actions.testAction,
    asyncCounter: thunk.asyncCounter,
  }, dispatch),
)
export default class App extends Component<Props> {
  render() {
    const {
      counter, first, testAction, asyncCounter,
    } = this.props;

    return (
      <div styleName="App">
        <header styleName="App-header">
          <img src={logo} styleName="App-logo" alt="logo" />
          <h1 styleName="App-title">Welcome to React</h1>
        </header>
        <p styleName="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Counter: {counter}
        </p>
        <p>
          first: {String(first)}
        </p>
        <button type="button" onClick={testAction}>counter</button>
        <button type="button" onClick={asyncCounter}>asyncCounter</button>
      </div>
    );
  }
}
