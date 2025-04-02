import { render, screen } from '@testing-library/react';
import App from '../App';

jest.mock('react-router-dom', () => ({
  BrowserRouter: ({ children }) => <div data-testid="browser-router">{children}</div>,
  Routes: ({ children }) => <div data-testid="routes">{children}</div>,
  Route: () => <div data-testid="route" />
}));

test('renders app with router', () => {
  render(<App />);
  expect(screen.getByTestId('browser-router')).toBeInTheDocument();
  expect(screen.getByTestId('routes')).toBeInTheDocument();
  expect(screen.getByTestId('route')).toBeInTheDocument();
});
