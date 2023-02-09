import { Box, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

const styleNavLink = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '3px 5px',
  textDecoration: 'none',
  color: 'inherit',
  textAlign: 'center',
  gap: '4px',

  '&.hover': {
    color: 'primary.main',
    backgroundColor: '#fff',
  },
  '&.active': {
    color: 'primary.main',
    backgroundColor: '#fff',
  },
};

export const AuthNav = () => {
  return (
    <Box display="flex" gap={2}>
      <Typography
        variant="h6"
        component={NavLink}
        sx={styleNavLink}
        to="/register"
      >
        Registration
      </Typography>
      <Typography
        variant="h6"
        component={NavLink}
        sx={styleNavLink}
        to="/login"
      >
        Log In
      </Typography>
    </Box>
  );
};
