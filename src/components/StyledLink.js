import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  color: #1384e7;
  font-weight: 600;

  &:hover {
    color: #025fb0;
    text-decoration: underline;
  }
`;
