// Simple axios mock for Jest
const axios = {
  create: jest.fn().mockReturnValue({
    get: jest.fn(() => Promise.resolve({ data: {} })),
    post: jest.fn(() => Promise.resolve({ data: {} })),
    put: jest.fn(() => Promise.resolve({ data: {} })),
    delete: jest.fn(() => Promise.resolve({ data: {} }))
  }),
  defaults: {
    adapter: {}
  }
};

module.exports = axios; 