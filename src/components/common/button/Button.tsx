import React from 'react';
import * as S from './style';

interface ButtonProps {
  children: string;
  disabled?: boolean;
  onClick?: () => void;
  $bc?: string
}

const Button = ({ children, disabled, onClick, $bc }: ButtonProps) => {
  return (
    <S.Button disabled={disabled} onClick={onClick} $bc={$bc}>
      {children}
    </S.Button>
  );
};

export default Button;
