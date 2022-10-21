import { Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { useAuth } from 'hooks/useAuth';
import { FaUserAlt } from 'react-icons/fa';
import { IoLogOut } from 'react-icons/io5';
import { useDispatch } from 'react-redux';

import { logOut } from 'redux/auth/operations';
import { deleteUserContacts } from 'redux/contacts/contactsSlice';
import { CustomIconButton } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleClick = () => {
    dispatch(logOut());
    dispatch(deleteUserContacts());
  };
  return (
    <Stack direction="row" alignItems="center" gap="8px">
      <FaUserAlt size="1em" color="#1384e7" />
      <Typography variant="subtitle1">{user.email}</Typography>

      <CustomIconButton size="small" onClick={handleClick}>
        <IoLogOut size="1.6em" />
      </CustomIconButton>
    </Stack>
  );
};
