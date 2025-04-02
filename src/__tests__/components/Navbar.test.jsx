import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from '../../components/Navbar';
import config from '../../config';

// Mock window.location.reload
Object.defineProperty(window, 'location', {
  value: {
    reload: jest.fn()
  },
  writable: true
});

describe('Navbar Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    localStorage.clear();
    // No need to call mockClear on reload since it's already a jest.fn()
  });

  it('should render the application title', () => {
    render(<Navbar />);
    
    expect(screen.getByText(/User Management/i)).toBeInTheDocument();
  });
}); 