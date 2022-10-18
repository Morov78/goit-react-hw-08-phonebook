import styled from '@emotion/styled';
import { useAuth } from 'hooks/useAuth';
import { FaUserAlt } from 'react-icons/fa';
import { IoLogOut } from 'react-icons/io5';
import { useDispatch } from 'react-redux';

import { logOut } from 'redux/auth/operations';

const Button = styled.button`
  display: flex;
  border: none;

  border-radius: 10px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <>
      <FaUserAlt size="1em" color="#1384e7" />
      <p>{user.email}</p>
      <Button type="button" onClick={() => dispatch(logOut())}>
        <IoLogOut size="2em" color="#1384e7" />
      </Button>
    </>
  );
};
