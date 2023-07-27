import styled from 'styled-components';

interface StyledButtonProps {
  $bc: string;
  fontColor: string;
}

// Partial을 쓰는 것이 유지보수, 확장성을 생각하면 좋다.
export const Button = styled.button<Partial<StyledButtonProps>>`
  width: 120px;
  height: 40px;
  color: ${({ fontColor }) => (fontColor ? fontColor : '#fff')};
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
