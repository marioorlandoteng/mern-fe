import React from 'react';
import { render, screen } from '@testing-library/react';
import Layout from '../../components/Layout';

describe('Layout Component', () => {
  beforeEach(() => {
    render(<Layout />);
  });

  it('should render the navbar', () => {
    // The Navbar contains the app name
    expect(screen.getByText(/User Management/i)).toBeInTheDocument();
  });

  it('should render the outlet content', () => {
    expect(screen.getByTestId('outlet-content')).toBeInTheDocument();
    expect(screen.getByText('Outlet Content')).toBeInTheDocument();
  });

  it('should render the footer with the current year', () => {
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(new RegExp(`MERN Stack Application - ${currentYear}`, 'i'))).toBeInTheDocument();
  });
}); 