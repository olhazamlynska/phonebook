import { useDispatch, useSelector } from 'react-redux';
import { setFilterContacts } from 'redux/filter/filtersSlice';
import { selectFilter } from 'redux/contacts/contactsSelectors';
import { Container, TextField } from '@mui/material';

export const FilterContacts = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <Container
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        mt: '20px',
        mb: '20px',
      }}
    >
      <TextField
        type="text"
        fullWidth
        label="Write name to find contact quickly"
        variant="outlined"
        size="normal"
        value={filter}
        sx={{ maxWidth: '700px' }}
        onChange={e => dispatch(setFilterContacts(e.target.value))}
      ></TextField>
    </Container>
  );
};
