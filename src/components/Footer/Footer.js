import { Link, Typography } from '@mui/material';

export const Footer = () => {
  return (
    <div
      style={{
        height: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px 0',
        marginTop: 'auto',
      }}
    >
      <Typography variant="p">
        Thank you for using!!!{' '}
        <Link color="inherit" href="https://github.com/olhazamlynska">
          Created by Olha Zamlynska
        </Link>{' '}
        {new Date().getFullYear()}
        {'\uD83D\uDC99'}
        {'\uD83D\uDC9B'}
      </Typography>
    </div>
  );
};
