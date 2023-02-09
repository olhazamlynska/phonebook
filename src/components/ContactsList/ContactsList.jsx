import { useSelector } from 'react-redux';
import {
  selectIsLoading,
  selectVisibleContacts,
  selectError,
} from 'redux/contacts/contactsSelectors';
import { Contact } from 'components/Contact/Contact';
import { Box, List, Typography } from '@mui/material';

export const ContactsList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <Box sx={{ flexGrow: 1, maxWidth: '800px', m: '0 auto' }}>
      {contacts.length === 0 && !isLoading && !error && (
        <Typography
          sx={{
            width: { xs: '90%', sm: '500px' },
            m: '4px auto 0 auto',
            textAlign: 'center',
          }}
          component="div"
          variant="h6"
        >
          Sorry,there no contact!
        </Typography>
      )}

      <List>
        {contacts.map(contact => {
          return <Contact key={contact.id} id={contact.id} contact={contact} />;
        })}
      </List>
    </Box>
  );
};
