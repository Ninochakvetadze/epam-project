import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Home from '../pages/Home/Home';

describe('Home Component', () => {
  it('renders the Home component with a PhotoBox and a Link', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    const homeComponent = screen.getByText('Find out more');
    expect(homeComponent).toBeInTheDocument();

    const linkToInner = screen.getByText('Find out more');
    expect(linkToInner).toBeInTheDocument();

    const photoBoxContent = screen.getByText('Nino Chakvetadze');
    expect(photoBoxContent).toBeInTheDocument();
  });

  it('navigates to the Inner component when the Link is clicked', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Home />
      </MemoryRouter>
    );

    const linkToInner = screen.getByText('Find out more');

    fireEvent.click(linkToInner);

    const innerComponent = screen.getByText('Nino Chakvetadze');
    expect(innerComponent).toBeInTheDocument();
  });
});
