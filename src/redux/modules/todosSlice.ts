import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { isAxiosError } from 'axios';
import Todo from '../../interfaces/Todo';
import api from '../../axios/api';

interface ErrorType {
  message: string;
}

interface ResponseDataType {
  message: string;
  code: string;
}

export const __getTodos = createAsyncThunk<
  Todo[],
  undefined,
  { rejectValue: ErrorType }
>('getTodos', async (_, thunkAPI) => {
  try {
    const { data } = await api.get<Todo[]>('/todos');
    return thunkAPI.fulfillWithValue(data);
  } catch (error) {
    if (isAxiosError<ResponseDataType>(error)) {
      return thunkAPI.rejectWithValue({ message: error.message });
    } else {
      return thunkAPI.rejectWithValue({ message: '알 수 없는 오류 발생' });
    }
  }
});

export const __addTodo = createAsyncThunk<
  Todo,
  Todo,
  { rejectValue: ErrorType }
>('addTodo', async (payload: Todo, thunkAPI) => {
  try {
    const res = await api.post<Todo>('/todos', payload);
    return thunkAPI.fulfillWithValue(res.data);
  } catch (error) {
    if (isAxiosError<ResponseDataType>(error)) {
      return thunkAPI.rejectWithValue({ message: error.message });
    } else {
      return thunkAPI.rejectWithValue({ message: '알 수 없는 오류 발생' });
    }
  }
});

export const __switchTodo = createAsyncThunk<
  Todo,
  Todo,
  { rejectValue: ErrorType }
>('switchTodo', async (payload: Todo, thunkAPI) => {
  try {
    const switchedTodo: Todo = { ...payload, isDone: !payload.isDone };
    const res = await api.patch(`/todos/${switchedTodo.id}`, switchedTodo);
    return thunkAPI.fulfillWithValue(res.data);
  } catch (error) {
    if (isAxiosError<ResponseDataType>(error)) {
      return thunkAPI.rejectWithValue({ message: error.message });
    } else {
      return thunkAPI.rejectWithValue({ message: '알 수 없는 오류 발생' });
    }
  }
});

export const __deleteTodo = createAsyncThunk<
  Todo[],
  string,
  { rejectValue: ErrorType }
>('deleteTodo', async (payload: string, thunkAPI) => {
  try {
    await api.delete(`/todos/${payload}`);
    const { data } = await api.get<Todo[]>('/todos');
    return thunkAPI.fulfillWithValue(data);
  } catch (error) {
    if (isAxiosError<ResponseDataType>(error)) {
      return thunkAPI.rejectWithValue({ message: error.message });
    } else {
      return thunkAPI.rejectWithValue({ message: '알 수 없는 오류 발생' });
    }
  }
});

interface State {
  todos: Todo[];
  isLoading: boolean;
  isError: boolean;
  error: unknown | string;
}

const initialState: State = {
  todos: [],
  isLoading: false,
  isError: false,
  error: null,
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(__getTodos.pending, (state, action) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(__getTodos.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.todos = action.payload;
    });
    builder.addCase(__getTodos.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.error.message;
    });
    builder.addCase(__addTodo.pending, (state, action) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(__addTodo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.todos.push(action.payload);
    });
    builder.addCase(__addTodo.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.error.message;
    });
    builder.addCase(__switchTodo.pending, (state, action) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(__switchTodo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.todos = state.todos.map((item) => {
        if (item.id === action.payload.id) {
          item.isDone = action.payload.isDone;
        }
        return item;
      });
    });
    builder.addCase(__switchTodo.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.error.message;
    });
    builder.addCase(__deleteTodo.pending, (state, action) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(__deleteTodo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.todos = action.payload;
    });
    builder.addCase(__deleteTodo.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.error.message;
    });
  },
});

export default todosSlice.reducer;
