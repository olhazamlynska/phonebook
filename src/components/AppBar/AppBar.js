import { AppBar, Toolbar, Typography } from '@mui/material';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks';
import { Link } from 'react-router-dom';

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
            display: { xs: 'none', mb: 'block' },
            color: 'inherit',
            width: '200px',
          }}
        >
          Phonebook
        </Typography>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Toolbar>
    </AppBar>
  );
};
