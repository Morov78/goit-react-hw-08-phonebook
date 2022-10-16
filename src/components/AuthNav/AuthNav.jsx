import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

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

export const AuthNav = () => {
  return (
    <>
      <StyledLink to="register">Register</StyledLink>
      <StyledLink to="login">Login</StyledLink>
    </>
  );
};
