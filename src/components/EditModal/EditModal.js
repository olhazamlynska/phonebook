import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { selectIsLoading } from 'redux/contacts/contactsSelectors';
import { updateContact } from 'redux/contacts/contactsOperations';
import { Modal, Box, Grid, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';

import ModeEditOutlineRoundedIcon from '@mui/icons-material/ModeEditOutlineRounded';
import { toast } from 'react-hot-toast';
import * as yup from 'yup';

const styleModal = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '100%', sm: '400px' },
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const schema = yup.object().shape({
  name: yup
    .string()
    .required(
      'Name is required. Name contains only letters, apostrophe, dashes and spaces'
    ),
  number: yup
    .string()
    .required(
      'Number is required. It have to strat with "+" and have at least 10 digits'
    ),
});

export const EditModal = ({ isOpen, handleClose, id, name, number }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const handleSubmit = (values, { resetForm }) => {
    if (
      name.trim().toLowerCase() === values.name.trim().toLowerCase() &&
      number === values.number
    ) {
      toast.error(`We have already had contact with such data`);
      return;
    }
    const data = { id, value: values };

    dispatch(updateContact(data))
      .unwrap()
      .then(() => {
        toast.success('You add contact!');
        handleClose();
      })
      .catch(() => toast.error('Something went wrong...Try again!'));

    resetForm();
  };

  const formik = useFormik({
    initialValues: {
      name,
      number,
    },
    validationSchema: schema,
    onSubmit: handleSubmit,
  });

  return (
    <div>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-edit-contact"
        aria-describedby="modal-edit-contact"
      >
        <Box sx={styleModal}>
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <TextField
                  type="text"
                  name="name"
                  id="name"
                  label="Name"
                  autoFocus
                  required
                  fullWidth
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="tel"
                  name="number"
                  id="number"
                  label="Number"
                  required
                  fullWidth
                  value={formik.values.number}
                  onChange={formik.handleChange}
                  error={formik.touched.number && Boolean(formik.errors.number)}
                  helperText={formik.touched.number && formik.errors.number}
                />
              </Grid>
            </Grid>
            <LoadingButton
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              loading={isLoading}
              endIcon={<ModeEditOutlineRoundedIcon />}
            >
              Edit
            </LoadingButton>
          </form>
        </Box>
      </Modal>
    </div>
  );
};
