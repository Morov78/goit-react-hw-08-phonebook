import { IconButton, TableCell } from '@mui/material';
import styled from 'styled-components';

export const StyledTableCell = styled(TableCell)`
  font-size: 16px;
  padding: 0 10px;
  background-color: #fefefe;
  border: 1px solid black;

  &:nth-of-type(2) {
    width: 30%;
  }
  &:nth-of-type(3) {
    width: 20%;
    text-align: center;
    padding: 0;
  }
  &.MuiTableCell-head {
    font-size: 24px;
    font-weight: 700;
    background-color: #d9d9d9;
    color: #1384e7;
    padding: 10px;
  }
`;

export const StyledIconButton = styled(IconButton)`
  &:hover {
    background-color: transparent;
    color: #000000;
  }
`;
