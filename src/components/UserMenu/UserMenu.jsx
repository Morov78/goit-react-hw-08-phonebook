import styled from '@emotion/styled';
import { FaUserAlt } from 'react-icons/fa';
import { IoLogOut } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOut } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';

const Button = styled.button`
  display: flex;
  border: none;

  border-radius: 10px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const UserNav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = event => {
    dispatch(logOut());
    navigate('/');
  };

  const user = useSelector(selectUser);
  return (
    <>
      <FaUserAlt size="1em" color="#1384e7" />
      <p>{user.email}</p>
      <Button type="button" onClick={handleClick}>
        <IoLogOut size="2em" color="#1384e7" />
      </Button>
    </>
  );
};
