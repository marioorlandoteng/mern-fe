# MERN Frontend

This is a simple MERN (MongoDB, Express, React, Node.js) stack application for user management. The frontend is built with React, Material UI, and React Router, connecting to a backend REST API.

## Backend Options

The application is configured to work with two different backend environments:

1. **Local Backend**: 
   - URL: `http://localhost:3001`
   - Used automatically when running in development mode
   - Make sure your local backend is running on port 3001

2. **Production Backend**:
   - URL: `https://mern-be-smoky.vercel.app`
   - Used automatically when running in production mode

## Features

- View a list of users
- Add a new user
- Edit an existing user
- Delete a user
- Responsive UI with Material Design

## Technologies Used

- **Frontend**:
  - React 19
  - React Router 6
  - Material UI
  - Axios for API requests
- **Testing**:
  - Jest
  - React Testing Library

## Project Setup

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the React development server:
   ```
   npm start
   ```
4. Start your local backend server on port 3001 (if developing locally)
5. Open [http://localhost:3000](http://localhost:3000) to view the application in your browser

## Running Tests

The application includes a comprehensive test suite that covers components, services, and configuration:

1. Run all tests:
   ```
   npm test
   ```

2. Run tests with coverage report:
   ```
   npm test -- --coverage
   ```

3. Run tests in watch mode (useful during development):
   ```
   npm test -- --watch
   ```

The test suite covers:
- API service functionality
- Component rendering and interaction
- Configuration settings
- UI state management
- Form interactions
- Routing

## Environment Configuration

The application automatically detects the environment and uses the appropriate backend:

- In **development mode** (`npm start`), it uses the local backend at `http://localhost:3001`
- In **production mode** (`npm run build`), it uses the remote backend at `https://mern-be-smoky.vercel.app`

You can verify which backend is being used by checking the console in your browser's developer tools.

## API Endpoints

The application interacts with the following API endpoints:

- `GET /user` - Fetch all users
- `GET /user/:id` - Fetch a specific user by ID
- `POST /user` - Create a new user
- `PUT /user/:id` - Update an existing user
- `DELETE /user/:id` - Delete a user

## Project Structure

```
src/
  ├── components/         # React components
  │   ├── Layout.jsx      # Application layout with navigation
  │   ├── Navbar.jsx      # Navigation bar component
  │   ├── UserForm.jsx    # Form for adding/editing users
  │   └── UserList.jsx    # Component to display list of users
  ├── services/
  │   └── api.js          # API service for user operations
  ├── __tests__/          # Test files
  │   ├── components/     # Component tests
  │   ├── services/       # Service tests
  │   ├── App.test.js     # App component tests
  │   └── config.test.js  # Configuration tests
  ├── __mocks__/          # Mock implementations for tests
  ├── config.js           # Application configuration
  ├── App.js              # Main application component with routing
  ├── index.js            # Application entry point
  └── index.css           # Global CSS styles
```

## Future Enhancements

- Add authentication
- Add pagination for large lists
- Implement search functionality
- Add more advanced form validation
- Add more unit and integration tests
- Implement E2E testing

## Live Demo

The application is deployed on Vercel and can be accessed at:
[https://mern-fe-sigma.vercel.app/](https://mern-fe-sigma.vercel.app/)
