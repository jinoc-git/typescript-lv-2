import * as S from './style';
import Form from '../form/Form';
import TodoList from '../todoList/TodoList';
import { useAppSelector } from '../../redux/config/configStore';

const Main = () => {
  const { todos, isLoading, isError } = useAppSelector((state) => state.todos);

  if (isLoading || !todos || isError) {
    return (
      <S.MainLayout>
        <Form />
        <S.LoadingBox>
          <S.Loading />
        </S.LoadingBox>
      </S.MainLayout>
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
