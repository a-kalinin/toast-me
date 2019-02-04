import React from 'react';
import { shallow } from 'enzyme';
import App from 'containers/App';

describe('containers/App', () => {
  test('match snapshot', () => {
    const wrapper = shallow(
      <App />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
