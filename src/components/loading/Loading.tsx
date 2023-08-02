import { ReactNode } from 'react';
import * as S from './style';

interface LoadingProps {
  children?: ReactNode;
}

const Loading = ({ children }: LoadingProps) => {
  return (
    <S.LoadingLayout>
      {children}
      <S.LoadingBox>
        <S.Loading />
      </S.LoadingBox>
    </S.LoadingLayout>
  );
};

export default Loading;
