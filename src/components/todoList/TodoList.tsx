import * as S from './style';
import TodoItem from '../todoItem/TodoItem';
import { useQuery } from '@tanstack/react-query';
import { getTodos } from '../../api/todos';
import Todo from '../../interfaces/Todo';
import { AxiosError } from 'axios';

interface TodoListProps {
  isDone: boolean;
}

const TodoList = ({ isDone }: TodoListProps) => {
  const {
    data: todos,
    isError,
    isLoading,
  } = useQuery<Todo[], AxiosError>(['todos'], getTodos);

  if (isLoading || isError || !todos) {
    return <></>;
  }

  return (
    <S.TodoListLayout>
      <S.TodoListTitle>{isDone ? 'Done..!' : 'Working..!'}</S.TodoListTitle>
      <S.TodoListBox>
        {todos
          .filter((todo) => todo.isDone === isDone)
          .map((todo) => {
            return <TodoItem key={todo.id} item={todo} />;
          })}
      </S.TodoListBox>
    </S.TodoListLayout>
  );
};

export default TodoList;
