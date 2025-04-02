# MERN Stack User Management Application

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
  ├── App.js              # Main application component with routing
  └── index.js            # Entry point
```

## Future Enhancements

- Add authentication
- Add pagination for large lists
- Implement search functionality
- Add more advanced form validation
- Add unit tests

## License

MIT
