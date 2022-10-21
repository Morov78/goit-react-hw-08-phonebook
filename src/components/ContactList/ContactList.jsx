// import css from './ContactList.module.css';
import { useDispatch } from 'react-redux';

import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

import { RiDeleteBinFill } from 'react-icons/ri';
import { deleteContact } from 'redux/contacts/operations';
import { StyledIconButton, StyledTableCell } from './ContactList.styled';

import { useContacts } from 'hooks/useContacts';

export default function ContactList() {
  const dispatch = useDispatch();
  const { contacts } = useContacts();

  const handleDeleteContact = id => {
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
      <Table stickyHeader>
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
              <TableRow key={id}>
                <StyledTableCell>{name}</StyledTableCell>
                <StyledTableCell>{number}</StyledTableCell>
                <StyledTableCell>
                  <StyledIconButton onClick={() => handleDeleteContact(id)}>
                    <RiDeleteBinFill />
                  </StyledIconButton>
                </StyledTableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
