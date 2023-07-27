import { css } from 'styled-components';
import styled from 'styled-components';

export const Button = styled.button<{ $bc: string | undefined }>`
  width: 120px;
  height: 40px;
  color: #fff;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  background-color: ${({ $bc }) => ($bc ? $bc : '#ff5817')};
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
    background-color: #707070;
  }
`;
