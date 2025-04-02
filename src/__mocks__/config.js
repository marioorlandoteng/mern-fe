// Mock configuration module
const config = {
  // API URLs for different environments
  apiUrls: {
    development: 'http://localhost:3001',
    production: 'https://mern-be-smoky.vercel.app',
  },

  // Mock getApiUrl function
  getApiUrl: jest.fn().mockReturnValue('http://mock-api-url.com')
};

module.exports = config; 