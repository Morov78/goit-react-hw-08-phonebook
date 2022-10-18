import styled from '@emotion/styled';
import { NavLink, Outlet } from 'react-router-dom';

import logo from '../../Images/logo.png';
import { useSelector } from 'react-redux';
import { selectIsLogged } from 'redux/auth/selectors';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';

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
  const isLogged = useSelector(selectIsLogged);

  return (
    <>
      <Container>
        <StyledLogo to="/" end>
          <img src={logo} alt="logo" />
        </StyledLogo>
        <Nav>
          <StyledLink to="/" end>
            Home
          </StyledLink>
          <StyledLink to="contacts">Contacts</StyledLink>
        </Nav>

        <Wrap>{isLogged ? <UserMenu /> : <AuthNav />}</Wrap>
      </Container>
      <Outlet />
    </>
  );
};

export default AppBar;
