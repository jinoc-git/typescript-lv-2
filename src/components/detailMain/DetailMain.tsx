import * as S from './style';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../common/button/Button';
import { useQuery } from '@tanstack/react-query';
import { getTodos } from '../../api/todos';
import { AxiosError } from 'axios';
import Todo from '../../interfaces/Todo';
import Loading from '../loading/Loading';

const DetailMain = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    data: todo,
    isLoading,
    isError,
  } = useQuery<Todo[], AxiosError, Todo | undefined>(['todos'], getTodos, {
    select: (todos) => {
      const todo = todos.find((todo) => todo.id === id);
      return todo;
    },
  });

  const goToHome = () => {
    navigate('/');
  };

  if (isLoading || isError) {
    return <Loading />;
  }

  if (!todo) {
    return <div>요청하신 todo는 없습니다</div>;
  }

  return (
    <S.DetailLayout>
      <S.DetailItem>
        <S.ItemHeader>
          <S.ItemId>ID: {todo.id}</S.ItemId>
          <Button type={'button'} onClick={goToHome}>
            이전으로
          </Button>
        </S.ItemHeader>
        <S.ItemBody>
          <S.ItemTitle>{todo.title}</S.ItemTitle>
          <S.ItemContent>{todo.content}</S.ItemContent>
        </S.ItemBody>
      </S.DetailItem>
    </S.DetailLayout>
  );
};

export default DetailMain;
