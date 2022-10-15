import styled from '@emotion/styled';
import { NavLink, Outlet } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import { IoLogOut } from 'react-icons/io5';

const Container = styled.div`
  height: 100px;
  width: 90%;

  display: flex;
  font-size: 20px;
  align-items: center;
  justify-content: space-between;
  padding-left: 15px;
  padding-right: 15px;
  background-color: blue;
  color: white;
`;

const Nav = styled.nav`
  display: flex;
  gap: 10px;
`;

const Wrap = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

const Button = styled.button`
  display: flex;
  border: none;
  ${'' /* padding: 4px 10px; */}
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const StyledLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: inherit;
  font-weight: 500;

  &.active {
    text-decoration: underline;
  }
`;

const AppBar = () => {
  return (
    <>
      <Container>
        <StyledLink to="/" end>
          PhoneBook
        </StyledLink>
        <Nav>
          <StyledLink to="contacts">Contacts</StyledLink>
          <StyledLink to="register">Register</StyledLink>
          <StyledLink to="login">Login</StyledLink>
        </Nav>
        <Wrap>
          <FaUserAlt />
          <p>mango@mail.com</p>
          <Button>
            <IoLogOut size={'2em'} />
          </Button>
        </Wrap>
      </Container>
      <Outlet />
    </>
  );
};

export default AppBar;
