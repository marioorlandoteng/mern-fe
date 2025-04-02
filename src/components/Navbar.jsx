import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  FormControlLabel,
  Switch
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import config from '../config';

const Navbar = () => {
  const [useLocalBackend, setUseLocalBackend] = useState(
    localStorage.getItem('useLocalBackend') === 'true'
  );

  // Effect to update localStorage when the switch changes
  useEffect(() => {
    localStorage.setItem('useLocalBackend', useLocalBackend);
    // Force reload to apply the new backend setting
    if (useLocalBackend) {
      localStorage.setItem('apiUrl', config.apiUrls.development);
    } else {
      localStorage.setItem('apiUrl', config.apiUrls.production);
    }
    // We don't reload immediately to avoid interrupting the user
  }, [useLocalBackend]);

  const handleBackendChange = (event) => {
    setUseLocalBackend(event.target.checked);
    // Reload after a short delay to apply changes
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };

  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <PersonIcon sx={{ mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component={RouterLink}
            to="/"
            sx={{
              mr: 2,
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
              flexGrow: 1
            }}
          >
            User Management
          </Typography>
          
          <FormControlLabel
            control={
              <Switch
                checked={useLocalBackend}
                onChange={handleBackendChange}
                color="secondary"
              />
            }
            label={useLocalBackend ? "Using Local Backend" : "Using Remote Backend"}
            sx={{ mr: 2, color: 'white' }}
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar; 