import { StyledLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <>
      <StyledLink to="/register">Register</StyledLink>
      <StyledLink to="/login">Login</StyledLink>
    </>
  );
};
