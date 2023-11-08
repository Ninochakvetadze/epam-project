import React from 'react';
import { render } from '@testing-library/react';
import LoadingSpinner from '../components/Loading/Loading';

test('LoadingSpinner component should render without errors', () => {
    render(<LoadingSpinner />);
  });