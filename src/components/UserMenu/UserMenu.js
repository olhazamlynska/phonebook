import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks';
import { logOut } from 'redux/auth/authOperations';
import { AddModal } from 'components/AddModal/AddModal';
import { Btn } from './UserMenu.styled';
import { Box, IconButton, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import PersonAddAlt1RoundedIcon from '@mui/icons-material/PersonAddAlt1Rounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

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
export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const [isShownModal, setIsShownModal] = useState(false);

  const openModal = () => {
    setIsShownModal(true);
  };

  const closeModal = () => {
    setIsShownModal(false);
  };

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <Box>
      <Box>
        <Typography
          variant="h6"
          component={NavLink}
          sx={styleNavLink}
          to="/contacts"
        >
          Contacts
        </Typography>
        <Typography
          variant="h6"
          component="button"
          sx={styleNavLink}
          onClick={openModal}
        >
          Add contact
        </Typography>
        <IconButton
          sx={{ color: 'inherit', display: { xs: 'flex', sm: 'none' } }}
          onClick={closeModal}
        >
          <PersonAddAlt1RoundedIcon />
        </IconButton>
      </Box>

      <Box sx={{ display: 'flex', gap: 4, alignItems: 'center' }}>
        <Typography
          variant="h6"
          component="p"
          sx={{ display: { xs: 'none', mb: 'inline-block' } }}
        >
          Welcome, {user.name}!
        </Typography>
        <Btn variant="h6" type="button" onClick={handleLogout}>
          <Typography
            variant="h6"
            component="p"
            sx={{ display: { xs: 'none', mb: 'inline-block' } }}
          >
            Log Out
          </Typography>
          <LogoutRoundedIcon />
        </Btn>
      </Box>
      <AddModal isOpen={isShownModal} closeModal={closeModal} />
    </Box>
  );
};
