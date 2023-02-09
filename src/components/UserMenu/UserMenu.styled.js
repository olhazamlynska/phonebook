import styled from 'styled-components';
import { Typography } from '@mui/material';
export const Btn = styled(Typography)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px 4px;

  border: none;
  border-radius: 4px;
  color: #fff;
  text-align: center;
  text-decoration: none;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover:not(.active),
  :focus-visible:not(.active) {
    background-color: rgb(37, 150, 190);
  }

  &.active {
    background-color: rgb(37, 150, 190);
  }
`;
