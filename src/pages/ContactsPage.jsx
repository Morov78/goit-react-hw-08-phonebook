import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchContacts } from '../redux/contacts/operations';

import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';
import { Stack } from '@mui/system';
import { useContacts } from 'hooks/useContacts';

const Contacts = () => {
  const dispatch = useDispatch();

  const { contacts, isLoading, error } = useContacts();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Stack
      justifyContent="start"
      alignItems="center"
      sx={{ height: 'calc(100vh - 102px - 16px)' }}
    >
      <ContactForm />
      <Filter />
      {contacts.length > 0 && <ContactList />}
      {isLoading && (
        <Stack position="absolute" top="240px" zIndex="100">
          <Loader />
        </Stack>
      )}
      {error && <p>{error}</p>}
    </Stack>
  );
};

export default Contacts;
