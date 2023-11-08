import React from 'react';
import { render, screen } from '@testing-library/react';
import { Address } from '../components/Address/Address';
import addressData from '../components/Address/AddressData';


describe('Address Component', () => {
  it('renders the header', () => {
    render(<Address />);
    const header = screen.getByText('Contacts');
    expect(header).toBeInTheDocument();
  });

  it('renders address data correctly', () => {
    render(<Address />);
  
    addressData.forEach((item) => {
      const label = screen.getByText(item.label);
      expect(label).toBeInTheDocument();
    });
  
   
  })
});
