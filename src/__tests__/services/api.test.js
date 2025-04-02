// Mock modules before imports
jest.mock('axios');
jest.mock('../../config');

// Import modules
const config = require('../../config');
const api = require('../../services/api').default; // Import the api instance directly
const { userApi } = require('../../services/api');

// Setup mock implementation
beforeAll(() => {
  // Mock config implementation
  config.getApiUrl.mockReturnValue('http://mock-api-url.com');
  config.apiUrls = {
    development: 'http://localhost:3001',
    production: 'https://mern-be-smoky.vercel.app'
  };
});

describe('API Service', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    console.error = jest.fn(); // Mock console.error
    console.log = jest.fn(); // Mock console.log
  });

  describe('getUsers', () => {
    it('should fetch users successfully', async () => {
      // Mock data
      const users = [
        { _id: '1', name: 'User 1', email: 'user1@test.com' },
        { _id: '2', name: 'User 2', email: 'user2@test.com' }
      ];
      
      // Directly mock the api's get method
      api.get = jest.fn().mockResolvedValue({ data: users });
      
      // Call the function
      const result = await userApi.getUsers();
      
      // Assertions
      expect(api.get).toHaveBeenCalledWith('/user');
      expect(result).toEqual(users);
    });
  });
}); 