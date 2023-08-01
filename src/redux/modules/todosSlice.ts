import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import Todo from '../../interfaces/Todo';
import api from '../../axios/api';

export const __getTodos = createAsyncThunk(
  'getTodos',
  async (payload, thunkAPI) => {
    try {
      const res = await api.get('/todos');
      return thunkAPI.fulfillWithValue(res.data);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __addTodo = createAsyncThunk(
  'addTodo',
  async (payload: Todo, thunkAPI) => {
    try {
      await api.post('/todos', payload);
      const res = await api.get('/todos');
      return thunkAPI.fulfillWithValue(res.data);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __switchTodo = createAsyncThunk(
  'switchTodo',
  async (payload: Todo, thunkAPI) => {
    try {
      const switchedTodo: Todo = { ...payload, isDone: !payload.isDone };
      await api.patch(`/todos/${switchedTodo.id}`, switchedTodo);
      const res = await api.get('/todos');
      return thunkAPI.fulfillWithValue(res.data);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deleteTodo = createAsyncThunk(
  'deleteTodo',
  async (payload: string, thunkAPI) => {
    try {
      await api.delete(`/todos/${payload}`);
      const res = await api.get('/todos');
      return thunkAPI.fulfillWithValue(res.data);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

interface State {
  todos: Todo[];
  isLoading: boolean;
  isError: boolean;
  error: unknown;
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
      state.error = action.error;
    });
    builder.addCase(__addTodo.pending, (state, action) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(__addTodo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.todos = action.payload;
    });
    builder.addCase(__addTodo.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.error;
    });
    builder.addCase(__switchTodo.pending, (state, action) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(__switchTodo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.todos = action.payload;
    });
    builder.addCase(__switchTodo.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.error;
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
      state.error = action.error;
    });
  },
});

export const {} = todosSlice.actions;
export default todosSlice.reducer;
