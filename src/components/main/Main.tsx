import * as S from './style';
import Form from '../form/Form';
import TodoList from '../todoList/TodoList';
import { useQuery } from '@tanstack/react-query';
import { getTodos } from '../../api/todos';
import { AxiosError } from 'axios';
import Todo from '../../interfaces/Todo';
import Loading from '../loading/Loading';

const Main = () => {
  const {
    data: todos,
    isLoading,
    isError,
  } = useQuery<Todo[], AxiosError>(['todos'], getTodos);

  if (isLoading || isError) {
    return (
      <Loading>
        <Form />
      </Loading>
    );
  }

  return (
    <S.MainLayout>
      <Form />
      <TodoList isDone={false} />
      <TodoList isDone={true} />
    </S.MainLayout>
  );
};

export default Main;
