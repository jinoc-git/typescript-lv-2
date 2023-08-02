import Todo from '../../interfaces/Todo';

const ADD_TODO = 'todos/ADD_TODO' as const;
const SWITCH_TODO = 'todos/SWITCH_TODO' as const;
const DELETE_TODO = 'todos/DELETE_TODO' as const;

export const addTodo = (payload: Todo) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const switchTodo = (payload: string) => {
  return {
    type: SWITCH_TODO,
    payload,
  };
};

export const deleteTodo = (payload: string) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};

type ActionType =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof switchTodo>
  | ReturnType<typeof deleteTodo>

const initialTodo: Todo[] = [
  {
    id: 'wyUZwUFA_',
    title: '타입스크립트',
    content: 'Lv1 과제 완성하기',
    isDone: false,
  },
];

const todos = (state: Todo[] = initialTodo, action: ActionType) => {
  switch (action.type) {
    case ADD_TODO:
      const newTodos = [...state, action.payload];
      return newTodos;
    case SWITCH_TODO:
      const switchedOneTodos = state.map((todo) => {
        if (todo.id === action.payload) {
          todo.isDone = !todo.isDone;
        }
        return todo;
      });
      return switchedOneTodos;
    case DELETE_TODO:
      const deletedOneTodos = state.filter(
        (todo) => todo.id !== action.payload
      );
      return deletedOneTodos;
    default:
      return state;
  }
};

export default todos;
