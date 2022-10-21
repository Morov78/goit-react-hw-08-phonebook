import { styled } from '@mui/system';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
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
