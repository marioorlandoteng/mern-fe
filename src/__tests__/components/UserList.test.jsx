import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import UserList from '../../components/UserList';
import { userApi } from '../../services/api';

// Mock the API service
jest.mock('../../services/api', () => ({
  userApi: {
    getUsers: jest.fn(),
    deleteUser: jest.fn(),
  },
}));

// Mock window.confirm
window.confirm = jest.fn();

describe('UserList Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should show loading state initially', () => {
    // Setup mock to not resolve immediately
    userApi.getUsers.mockImplementation(() => new Promise(() => {}));
    
    // Render component
    render(<UserList />);
    
    // Check for loading indicator
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  it('should render a list of users when data is loaded', async () => {
    // Mock data
    const mockUsers = [
      { _id: '1', name: 'User 1', email: 'user1@test.com', createdAt: '2023-01-01T00:00:00.000Z' },
      { _id: '2', name: 'User 2', email: 'user2@test.com', createdAt: '2023-02-01T00:00:00.000Z' },
    ];
    
    // Setup mock response
    userApi.getUsers.mockResolvedValueOnce(mockUsers);
    
    // Render component
    render(<UserList />);
    
    // Wait for users to load
    await waitFor(() => {
      expect(screen.getByText('User 1')).toBeInTheDocument();
      expect(screen.getByText('User 2')).toBeInTheDocument();
    });
  });
}); 