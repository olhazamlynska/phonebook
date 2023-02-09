import { Link } from 'react-router-dom';
import { useAuth } from 'hooks';
import { AuthNav } from 'components/AuthNav/AuthNav';

import { UserMenu } from 'components/UserMenu/UserMenu';
import { AppBar, Toolbar, Typography } from '@mui/material';

export const AppHeader = () => {
  const { isLoggedIn } = useAuth();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          component={Link}
          to="/"
          variant="h6"
          sx={{
            fontWeight: 600,
            textDecoration: 'none',
            flexGrow: 1,
            display: { xs: 'none', sm: 'block' },
            color: 'inherit',
            width: '200px',
          }}
        >
          Phonebook
        </Typography>
        <Typography
          component={Link}
          to="/contacts"
          variant="h6"
          sx={{
            fontWeight: 600,
            textDecoration: 'none',
            flexGrow: 1,
            display: { xs: 'none', sm: 'block' },
            color: 'inherit',
            width: '200px',
          }}
        >
          Contacts
        </Typography>

        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Toolbar>
    </AppBar>
  );
};
