import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';
import { useAuth } from 'hooks';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const StyleLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  color: rgba(43, 152, 185, 255);
  &:hover,
  &:focus {
    color: rgba(93, 68, 61, 255);
  }
`;

export default function Home() {
  const { isLoggedIn } = useAuth();
  return (
    <Box
      sx={{
        maxWidth: '800px',
        mx: 'auto',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        alignItems: 'center',
        justifyContent: 'center',
        height: '80vh',
      }}
    >
      <Helmet>
        <title>My phonebook!</title>
      </Helmet>
      <Typography component="h1" variant="h6">
        Welcome to phonebook!
      </Typography>
      {!isLoggedIn && (
        <Typography component="p" variant="h6">
          You can <StyleLink to="/register">register</StyleLink> or{' '}
          <StyleLink to="/login">login</StyleLink> if you have already an
          account. You can add a list of contacts and then edit, delete or
          filter.
        </Typography>
      )}
      {isLoggedIn && (
        <Typography component="p" variant="h6">
          You are already logged in! Go to you{' '}
          <StyleLink to="/contacts">contacts</StyleLink> !
        </Typography>
      )}
    </Box>
  );
}
