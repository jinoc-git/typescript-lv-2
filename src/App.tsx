import { useEffect } from 'react';
import Router from './shared/Router';
import { useAppDispatch } from './redux/config/configStore';
import { __getTodos } from './redux/modules/todosSlice';

function App() {
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    dispatch(__getTodos());
  });

  return <Router />;
}

export default App;
