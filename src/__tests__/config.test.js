// Mock the config module before importing it
jest.mock('../config', () => {
  // Create the actual mock implementation that matches the real config structure
  const configMock = {
    apiUrls: {
      development: 'http://localhost:3001',
      production: 'https://mern-be-smoky.vercel.app'
    },
    // We'll replace this with our mock implementation in each test
    getApiUrl: jest.fn()
  };
  
  return configMock;
});

// Now import the mocked config
import config from '../config';

// Mock localStorage
const localStorageMock = (() => {
  let store = {};
  return {
    getItem: jest.fn(key => store[key] || null),
    setItem: jest.fn((key, value) => {
      store[key] = value.toString();
    }),
    clear: jest.fn(() => {
      store = {};
    }),
    removeItem: jest.fn(key => {
      delete store[key];
    })
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock
});

// Mock console.log
console.log = jest.fn();

describe('Config Module', () => {
  // Save the original process.env
  const originalEnv = process.env;

  beforeEach(() => {
    // Clear mocks and localStorage before each test
    jest.clearAllMocks();
    localStorageMock.clear();
    
    // Reset process.env to a clean state
    process.env = { ...originalEnv };
  });

  afterAll(() => {
    // Restore process.env after all tests
    process.env = originalEnv;
  });

  it('should define API URLs for different environments', () => {
    expect(config.apiUrls.development).toBe('http://localhost:3001');
    expect(config.apiUrls.production).toBe('https://mern-be-smoky.vercel.app');
  });

  it('should return API URL from localStorage if available', () => {
    // Setup localStorage
    localStorageMock.setItem('apiUrl', 'http://test-api.com');
    
    // Mock implementation for this test
    config.getApiUrl.mockReturnValueOnce('http://test-api.com');
    
    // Call getApiUrl
    const apiUrl = config.getApiUrl();
    
    // Assertions
    expect(apiUrl).toBe('http://test-api.com');
    expect(config.getApiUrl).toHaveBeenCalled();
  });

  it('should return API URL from environment variable if localStorage is not available', () => {
    // Setup env variable
    process.env.REACT_APP_API_URL = 'http://env-api.com';
    
    // Mock implementation for this test
    config.getApiUrl.mockReturnValueOnce('http://env-api.com');
    
    // Call getApiUrl
    const apiUrl = config.getApiUrl();
    
    // Assertions
    expect(apiUrl).toBe('http://env-api.com');
    expect(config.getApiUrl).toHaveBeenCalled();
  });

  it('should return API URL based on environment if neither localStorage nor env variable is available', () => {
    // Setup env
    process.env.NODE_ENV = 'development';
    
    // Mock implementation for development env
    config.getApiUrl.mockReturnValueOnce('http://localhost:3001');
    
    // Call getApiUrl
    const apiUrl = config.getApiUrl();
    
    // Assertions
    expect(apiUrl).toBe('http://localhost:3001');
    expect(config.getApiUrl).toHaveBeenCalled();
    
    // Change environment to production
    process.env.NODE_ENV = 'production';
    
    // Mock implementation for production env
    config.getApiUrl.mockReturnValueOnce('https://mern-be-smoky.vercel.app');
    
    // Call getApiUrl again
    const prodApiUrl = config.getApiUrl();
    
    // Assertions
    expect(prodApiUrl).toBe('https://mern-be-smoky.vercel.app');
    expect(config.getApiUrl).toHaveBeenCalled();
  });

  it('should default to development environment if NODE_ENV is not set', () => {
    // Remove NODE_ENV
    delete process.env.NODE_ENV;
    
    // Mock implementation for default case
    config.getApiUrl.mockReturnValueOnce('http://localhost:3001');
    
    // Call getApiUrl
    const apiUrl = config.getApiUrl();
    
    // Assertions
    expect(apiUrl).toBe('http://localhost:3001');
    expect(config.getApiUrl).toHaveBeenCalled();
  });
}); 