import * as S from './style';
import Form from '../form/Form';
import TodoList from '../todoList/TodoList';

const Main = () => {

  return (
    <S.MainLayout>
      <Form />
      <TodoList isDone={false} />
      <TodoList isDone={true} />
    </S.MainLayout>
  );
};

export default Main;
