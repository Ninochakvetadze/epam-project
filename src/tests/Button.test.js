import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../components/Button/Button';

describe('Button', () => {
  it('renders with text and fires the onClick handler', () => {
    const onClickMock = jest.fn();
    render(<Button text="Click me" onClick={onClickMock} />);

    const button = screen.getByText('Click me');
    fireEvent.click(button);

    expect(button).toBeInTheDocument();
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it('renders with a custom class name', () => {
    render(<Button text="Custom" className="buttonText" />);

    const button = screen.getByText('Custom');

    expect(button).toHaveClass('buttonText');
  });

  it('renders with dynamic text', () => {
    const dynamicText = 'Dynamic Text';
    render(<Button text={dynamicText} />);

    const text = screen.getByText(dynamicText);

    expect(text).toBeInTheDocument();
  });

  it('does not render FontAwesomeIcon when icon prop is not provided', () => {
    render(<Button />);

    const icon = screen.queryByTestId('font-awesome-icon');
    
    expect(icon).toBeNull();
  });
});
