import React from 'react';
import * as S from './style';
import TodoItem from '../todoItem/TodoItem';
import { useAppSelector } from '../../redux/config/configStore';

interface TodoListProps {
  isDone: boolean;
}

const TodoList = ({ isDone }: TodoListProps) => {
  const { todos } = useAppSelector((state) => state.todos);

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
