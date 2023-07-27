import { ReactNode } from 'react';
import * as S from './style';

interface ButtonProps {
  children: ReactNode; // 이걸로 받으면 다른 태그가 들어와도 받을 수 있다.
  disabled?: boolean;
  onClick?: () => void;
  $bc?: string;
}

// $bc의 기본값을 지정하면 style.js에서 | undefined를 작성하지 않아도 된다. ($bc = '#ff5817')
const Button = ({ children, disabled, onClick, $bc }: ButtonProps) => {
  return (
    <S.Button disabled={disabled} onClick={onClick} $bc={$bc}>
      {children}
    </S.Button>
  );
};

export default Button;
