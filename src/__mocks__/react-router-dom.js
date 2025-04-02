import React from 'react';

// Create a mock for useParams hook
let mockParams = {};
const setMockParams = (params) => {
  mockParams = params;
};

// Create a mock for useNavigate hook
const mockedNavigate = jest.fn();

module.exports = {
  BrowserRouter: ({ children }) => <div>{children}</div>,
  Routes: ({ children }) => <div>{children}</div>,
  Route: ({ element }) => element,
  Link: ({ children, to }) => <a href={to} data-testid="link">{children}</a>,
  Outlet: () => <div data-testid="outlet-content">Outlet Content</div>,
  useNavigate: () => mockedNavigate,
  useParams: () => mockParams,
  // Expose test utility
  __setParams: setMockParams
}; 