import ContactItem from './ContactItem/ContactItem';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/contacts/selectors';

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <table className={css.table}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Delete</th>
        </tr>
      </thead>

      <tbody>
        {contacts.map(({ id, name, number }) => {
          return (
            <tr key={id}>
              <ContactItem id={id} name={name} number={number} />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
