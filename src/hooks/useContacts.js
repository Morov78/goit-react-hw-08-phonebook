import { useSelector } from 'react-redux';
import {
  selectIsLoading,
  selectError,
  selectFilteredContacts,
  selectFilter,
} from 'redux/contacts/selectors';

export const useContacts = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectFilteredContacts);
  const filter = useSelector(selectFilter);

  return {
    isLoading,
    error,
    contacts,
    filter,
  };
};
