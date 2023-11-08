import React from 'react';
import { render, screen } from '@testing-library/react';
import Education from '../components/Education/Education';

test('it renders a loading spinner initially', () => {
  render(<Education />);
  const loadingSpinner = screen.getByTestId('loading-spinner');
  expect(loadingSpinner).toBeInTheDocument();
});

test('it renders education data after loading', async () => {
  global.fetch = jest.fn().mockResolvedValue({
    json: () => Promise.resolve({ educations: [{ id: 1, date: '2022-2023', title: 'Bachelor', discription: 'Description' }] }),
  });

  render(<Education />);
  
  await screen.findByText('Education'); 

  const eduTitle = screen.getByText('Education');
  const eduDescription = screen.getByText('Education');

  expect(eduTitle).toBeInTheDocument();
  expect(eduDescription).toBeInTheDocument();
});

test('it handles errors when fetching education data', async () => {
  jest.spyOn(console, 'error').mockImplementation(() => {});

  global.fetch = jest.fn().mockRejectedValue(new Error('Failed to fetch education data'));

  render(<Education />);
  
  await screen.findByTestId('loading-spinner');

  expect(console.error).toHaveBeenCalledWith('Error fetching education data:', expect.any(Error));

  jest.restoreAllMocks();
});
