import api from '../axios/api';
import Todo from '../interfaces/Todo';

export const getTodos = async (): Promise<Todo[]> => {
  const { data } = await api.get<Todo[]>('/todos');
  return data;
};

export const addTodo = async (newTodo: Todo) => {
  await api.post<Todo[]>('/todos', newTodo);
};

export const switchTodo = async (todo: Todo) => {
  await api.patch<Todo[]>(`/todos/${todo.id}`, { ...todo, isDone: !todo.isDone });
};

export const deleteTodo = async (id: string) => {
  await api.delete<Todo[]>(`/todos/${id}`);
};
