// Configuration settings for the application
const config = {
  // API URLs for different environments
  apiUrls: {
    development: 'http://localhost:3001',
    production: 'https://mern-be-smoky.vercel.app',
  },

  // Helper function to get the current API URL based on environment
  getApiUrl: () => {
    // First check if we have a specific URL in localStorage
    const localStorageUrl = localStorage.getItem('apiUrl');
    if (localStorageUrl) {
      console.log('Using API URL from localStorage:', localStorageUrl);
      return localStorageUrl;
    }
    
    // Next try environment variable
    if (process.env.REACT_APP_API_URL) {
      console.log('Using API URL from environment variable:', process.env.REACT_APP_API_URL);
      return process.env.REACT_APP_API_URL;
    }
    
    // Fall back to config based on environment
    const environment = process.env.NODE_ENV || 'development';
    console.log('Using API URL from config:', config.apiUrls[environment]);
    return config.apiUrls[environment];
  }
};

export default config; 