import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import { useFormik } from 'formik';
import { addContact } from 'redux/contacts/contactsOperations';
import {
  selectContacts,
  selectIsLoading,
} from 'redux/contacts/contactsSelectors';
import * as yup from 'yup';
import { Box, Grid, Modal, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';

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

export function AddModal({ isOpen, closeModal }) {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  const handleSubmit = ({ name, number }, { resetForm }) => {
    const isAddedName = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    const isAddedNunber = contacts.some(contact => contact.number === number);

    if (isAddedName) {
      toast.failure(`We have already had contact with name ${name}`);
      return false;
    } else if (isAddedNunber) {
      toast.failure(`We have already had contact with number ${number}`);
      return false;
    }

    dispatch(addContact({ name, number }))
      .unwrap()
      .then(() => {
        toast.success('You add contact!');
        closeModal();
      })
      .catch(() => toast.error('Something went wrong...Try again!'));

    resetForm();
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      number: '',
    },
    validationSchema: schema,
    onSubmit: handleSubmit,
  });

  return (
    <Modal
      open={isOpen}
      onClose={closeModal}
      aria-labelledby="modal-add-contact"
      aria-describedby="modal-add-contact"
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
            endIcon={<PersonAddAlt1OutlinedIcon />}
          >
            Add contact
          </LoadingButton>
        </form>
      </Box>
    </Modal>
  );
}
