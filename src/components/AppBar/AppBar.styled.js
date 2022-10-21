import { styled } from '@mui/material';
import { Stack } from '@mui/system';
import { NavLink } from 'react-router-dom';

export const StyledStack = styled(Stack)`
  height: 100px;
  border-bottom: 2px solid black;
  color: #1384e7;
  font-size: 20px;
  padding: 0 30px;
`;

export const StyledLogo = styled(NavLink)`
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
