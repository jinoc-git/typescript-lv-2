import React from 'react';
import * as S from './style';
import TodoItem from '../todoItem/TodoItem';
import Todo from '../../interfaces/Todo';

interface TodoListProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  isDone: boolean;
}

const TodoList = ({ todos, setTodos, isDone }: TodoListProps) => {
  const switchTodo = (id: string): void => {
    const newTodos: Todo[] = todos.map((todo) => {
      if (todo.id === id) {
        todo.isDone = !todo.isDone;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const deleteTodo = (id: string): void => {
    const newTodos: Todo[] = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <S.TodoListLayout>
      <S.TodoListTitle>{isDone ? 'Done..!' : 'Working..!'}</S.TodoListTitle>
      <S.TodoListBox>
        {todos
          .filter((todo) => todo.isDone === isDone)
          .map((todo) => {
            return (
              <TodoItem
                key={todo.id}
                item={todo}
                isDone={isDone}
                switchTodo={switchTodo}
                deleteTodo={deleteTodo}
              />
            );
          })}
      </S.TodoListBox>
    </S.TodoListLayout>
  );
};

export default TodoList;
