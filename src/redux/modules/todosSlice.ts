import { ActionReducerMapBuilder, AsyncThunk, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import Todo from '../../interfaces/Todo';

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

export const __getTodos = createAsyncThunk(
  'getTodos',
  async (payload, thunkAPI) => {
    try {
      const res = await axios.get('http://localhost:3001/todos');
      console.log('res', res);
      return thunkAPI.fulfillWithValue(res.data);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  // extraReducers: (builder)=> {
  //   builder.addCase(__getTodos.pending, (state: State, action) => {
  //     state.isLoading = true;
  //     state.isError = false;
  //   });
  //   builder.addCase(__getTodos.fulfilled, (state: State, action) => {
  //     state.isLoading = false;
  //     state.isError = false;
  //     state.todos = action.payload;
  //   });
  //   builder.addCase(__getTodos.rejected, (state: State, action) => {
  //     state.isLoading = false;
  //     state.isError = true;
  //     state.error = action.error;
  //   });
  // },
});

export const {} = todosSlice.actions;
export default todosSlice.reducer;
// {
//   [__getTodos.pending.type]: (state, action) => {
//     console.log('pending');
//     state.isLoading = true;
//     state.isError = false;
//   },
//   [__getTodos.fulfilled.type]: (state, action) => {
//     console.log('ful', action);
//     state.isLoading = false;
//     state.isError = false;
//     state.todos = action.payload;
//   },
//   [__getTodos.rejected.type]: (state, action) => {
//     state.isLoading = false;
//     state.isError = true;
//     state.error = action.payload;
//   },
// },
