import styled from '@emotion/styled';
import { NavLink, Outlet } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import { IoLogOut } from 'react-icons/io5';

import logo from '../../Images/logo.png';

const Container = styled.header`
  height: 100px;
  width: 100%;
  max-width: 768px;

  display: flex;
  font-size: 20px;
  align-items: center;
  justify-content: space-between;

  color: #1384e7;
  border-bottom: solid 2px black;
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

  border-radius: 10px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  font-weight: 500;

  &:hover {
    color: #025fb0;
    text-decoration: underline;
  }
  &.active {
    text-decoration: underline;
  }
`;
const StyledLogo = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 8px;

  & img {
    width: auto;
    height: 4em;
  }
`;
const AppBar = () => {
  return (
    <>
      <Container>
        <StyledLogo to="/" end>
          <img src={logo} alt="logo" />
        </StyledLogo>
        <Nav>
          <StyledLink to="contacts">Contacts</StyledLink>
          <StyledLink to="register">Register</StyledLink>
          <StyledLink to="login">Login</StyledLink>
        </Nav>
        <Wrap>
          <FaUserAlt size="1em" color="#1384e7" />
          <p>mango@mail.com</p>
          <Button>
            <IoLogOut size="2em" color="#1384e7" />
          </Button>
        </Wrap>
      </Container>
      <Outlet />
    </>
  );
};

export default AppBar;
