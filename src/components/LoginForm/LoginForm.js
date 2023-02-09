import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import {
  Container,
  Avatar,
  Box,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import LockPersonOutlinedIcon from '@mui/icons-material/LockPersonOutlined';

import { logIn } from 'redux/auth/authOperations';
import { useAuth } from 'hooks';
import { toast } from 'react-hot-toast';
import { validationSchemaLogIn } from 'constants/validationSchema';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const { authIsLoading } = useAuth();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(
      logIn({
        name: values.name,
        email: values.email,
        password: values.password,
      })
    )
      .unwrap()
      .then(() => toast.success('You are logged in!'))
      .catch(() => toast.error('Something went wrong! Try again...'));

    resetForm();
  };
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchemaLogIn,
    onSubmit: handleSubmit,
  });

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar
          sx={{
            m: 1,
            bgcolor: 'secondary.main',
          }}
        >
          <LockPersonOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" mb={2}>
          Log in
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <TextField
                type="email"
                required
                fullWidth
                id="email"
                label="Email Adress"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                type="password"
                name="password"
                label="password"
                id="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
            </Grid>
          </Grid>
          <LoadingButton
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            loading={authIsLoading}
          >
            Log in
          </LoadingButton>
        </form>
      </Box>
    </Container>
  );
};
