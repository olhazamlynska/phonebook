import { Helmet } from 'react-helmet-async';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { FilterContacts } from 'components/FilterContacts/FilterContacts';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import {
  selectIsLoading,
  selectContacts,
  selectError,
} from 'redux/contacts/contactsSelectors';
import { Typography } from '@mui/material';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const contacts = useSelector(selectContacts);

  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <FilterContacts />
      {isLoading && !error && (
        <Typography
          variant="h6"
          component="div"
          sx={{ m: '4px auto 0 auto', width: { xs: '90%', sm: '500px' } }}
        >
          Request on progress...
        </Typography>
      )}
      {contacts.length > 0 && <ContactsList />}
      {contacts.length === 0 && !isLoading && !error && (
        <Typography
          variant="h6"
          component="div"
          sx={{ m: '4px auto 0 auto', width: { xs: '90%', sm: '500px' } }}
        >
          You have empty phonebook...Please add contact!
        </Typography>
      )}
      {error && (
        <Typography
          variant="h6"
          component="div"
          sx={{ m: '4px auto 0 auto', width: { xs: '90%', sm: '500px' } }}
        >
          Something went wrong...Please try again!
        </Typography>
      )}
    </>
  );
};
export default Contacts;
