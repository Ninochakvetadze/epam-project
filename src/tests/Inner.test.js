import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Inner from '../pages/Inner/Inner';
import { store } from '../app/store';

test('renders without errors', () => {
  render(
    <Provider store={store}>
      <Inner />
    </Provider>
  );

});
