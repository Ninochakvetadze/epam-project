import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Navigation from '../components/Navigation/Navigation';
import { navItems } from '../components/Navigation/NavItems';

describe('Navigation Component', () => {
  const scrollIntoViewMock = jest.fn();
  window.HTMLElement.prototype.scrollIntoView = scrollIntoViewMock;

  it('calls scrollToSection when a link is clicked', () => {
    render(<Navigation />);
    
    navItems.forEach((item) => {
      const link = screen.getByText(item.label);
      fireEvent.click(link);

    });
  });
});
