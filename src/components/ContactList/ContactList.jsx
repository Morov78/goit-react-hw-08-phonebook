// import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/contacts/selectors';
import {
  IconButton,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

import { RiDeleteBinFill } from 'react-icons/ri';
import { deleteContact } from 'redux/contacts/operations';
import { StyledTableCell } from './ContactList.styled';

export default function ContactList() {
  const dispatch = useDispatch();

  const contacts = useSelector(selectFilteredContacts);

  const handleDeleteContact = id => {
    console.log(id);
    dispatch(deleteContact(id));
  };

  return (
    <TableContainer
      sx={{
        maxWidth: '768px',
        margin: '20px 0',
        borderBottom: '1px solid black',
        borderCollapse: 'collapse',
      }}
    >
      <Table stickyHeader={true}>
        <TableHead>
          <TableRow>
            <StyledTableCell variant="head" align="center">
              Name
            </StyledTableCell>
            <StyledTableCell variant="head" align="center">
              Phone
            </StyledTableCell>
            <StyledTableCell variant="head" align="center">
              Delete
            </StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {contacts.map(({ id, name, number }) => {
            return (
              <TableRow
                key={id}
                // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <StyledTableCell>{name}</StyledTableCell>
                <StyledTableCell>{number}</StyledTableCell>
                <StyledTableCell>
                  <IconButton onClick={() => handleDeleteContact(id)}>
                    <RiDeleteBinFill />
                  </IconButton>
                </StyledTableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
