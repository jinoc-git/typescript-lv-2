import { useState } from 'react';
import * as S from './style';
import Form from '../form/Form';
import shortid from 'shortid';
import TodoList from '../todoList/TodoList';
import Todo from '../../interfaces/Todo';

// 자주 사용하는 Todo같은 interface는 따로 폴더로 분리해도 된다

// initialTodo는 리렌더링 될 때마다 다시 선언하니 밖으로 빼자.
const initialTodo: Todo = {
  id: shortid.generate(),
  title: '타입스크립트',
  content: 'Lv1 과제 완성하기',
  isDone: false,
};

const Main = () => {
  const [todos, setTodos] = useState<Todo[]>([initialTodo]);

  return (
    <S.MainLayout>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} isDone={false} />
      <TodoList todos={todos} setTodos={setTodos} isDone={true} />
    </S.MainLayout>
  );
};

export default Main;
