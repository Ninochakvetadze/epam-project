import React from 'react';
import { render, screen } from '@testing-library/react';
import { Timeline } from '../components/Timeline/Timeline';

test('Timeline component renders with the correct title', () => {
  render(<Timeline />);
  const title = screen.getByText('Timeline');
  expect(title).toBeInTheDocument();
});

