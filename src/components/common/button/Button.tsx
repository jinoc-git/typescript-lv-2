import { ReactNode } from 'react';
import * as S from './style';

interface ButtonProps {
  children: ReactNode;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  $bc?: string;
  type: 'button' | 'submit' | 'reset';
}

const Button = ({ children, disabled, onClick, $bc, type }: ButtonProps) => {
  return (
    <S.Button disabled={disabled} onClick={onClick} $bc={$bc} type={type}>
      {children}
    </S.Button>
  );
};

export default Button;
