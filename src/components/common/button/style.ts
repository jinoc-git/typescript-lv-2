import { css } from 'styled-components';
import styled from 'styled-components';

// 방법 2로 기본값을 지정하면 | undefined를 작성하지 않아도 된다.
export const Button = styled.button<{ $bc?: string }>`
  width: 120px;
  height: 40px;
  color: #fff;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  // 방법 2로 기본값을 지정하면 삼항연산자를 사용하지 않아도 된다.
  background-color: ${({ $bc }) => ($bc ? $bc : '#ff5817')};
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
    background-color: #707070;
  }
`;
