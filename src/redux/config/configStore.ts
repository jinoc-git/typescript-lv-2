import { configureStore } from '@reduxjs/toolkit';
import todos from '../modules/todosSlice';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const store = configureStore({
  reducer: {
    todos,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

