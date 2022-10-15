import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchContacts } from '../redux/operations';
import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';

import ContactForm from 'components/ContactFrom/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';

const Contacts = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ContactForm />
      <Filter />

      {contacts.length > 0 && <ContactList />}
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
    </>
  );
};

export default Contacts;
