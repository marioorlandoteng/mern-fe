import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import UserForm from '../../components/UserForm';
import { userApi } from '../../services/api';

// Import mock utilities
import { __setParams } from 'react-router-dom';

// Mock the API service
jest.mock('../../services/api', () => ({
  userApi: {
    getUserById: jest.fn(),
    createUser: jest.fn(),
    updateUser: jest.fn(),
  },
}));

describe('UserForm Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render the form for adding a new user', () => {
    // Set params to indicate new user mode
    __setParams({});
    
    // Render component
    render(<UserForm />);
    
    // Check title
    expect(screen.getByText('Add New User')).toBeInTheDocument();
    
    // Check inputs
    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    
    // Check button
    expect(screen.getByRole('button', { name: /Save User/i })).toBeInTheDocument();
  });

  it('should load user data in edit mode', async () => {
    // Mock user data
    const mockUser = { _id: '1', name: 'Test User', email: 'test@example.com' };
    userApi.getUserById.mockResolvedValueOnce(mockUser);
    
    // Set params to indicate edit mode
    __setParams({ id: '1' });
    
    // Render component
    render(<UserForm />);
    
    // Wait for edit title to appear after loading completes
    await waitFor(() => {
      expect(screen.getByText('Edit User')).toBeInTheDocument();
    });
    
    // Wait for data to load
    await waitFor(() => {
      expect(screen.getByLabelText(/Name/i).value).toBe('Test User');
      expect(screen.getByLabelText(/Email/i).value).toBe('test@example.com');
    });
  });
}); 