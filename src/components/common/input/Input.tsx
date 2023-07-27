import React from 'react';
import * as S from './style';

interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ value, onChange }: InputProps) => {
  return <S.Input value={value} onChange={onChange} />;
};

export default Input;
