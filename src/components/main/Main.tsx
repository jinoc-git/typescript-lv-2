import React, { useState } from 'react';
import * as S from './style';
import Form from '../form/Form';
import shortid from 'shortid';
import TodoList from '../todoList/TodoList';

export interface Todo {
  id: string;
  title: string;
  content: string;
  isDone: boolean;
}

const Main = () => {
  const initialTodo: Todo = {
    id: shortid.generate(),
    title: '타입스크립트',
    content: 'Lv1 과제 완성하기',
    isDone: false,
  };
  const [todos, setTodos] = useState<Todo[]>([initialTodo]);

  return (
    <S.MainLayout>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} isDone={false}  />
      <TodoList todos={todos} setTodos={setTodos} isDone={true}  />
    </S.MainLayout>
  );
};

export default Main;
