import * as S from './style';
import Todo from '../../interfaces/Todo';
import Button from '../common/button/Button';
import { useDispatch } from 'react-redux';
// import { deleteTodo, switchTodo } from '../../redux/modules/todos';
import { useNavigate } from 'react-router-dom';
import { __getTodos } from '../../redux/modules/todosSlice';
import { AppDispatch, useAppSelector } from '../../redux/config/configStore';

interface TodoItemProps {
  item: Todo;
}

const TodoItem = ({ item }: TodoItemProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const todos = useAppSelector((state) => state.todos);
  const onClickSwitchStatus = (
    e: React.MouseEvent<HTMLButtonElement>
  ): void => {
    e.stopPropagation();
    dispatch(__getTodos());
  };

  const onClickDeleteTodo = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    // dispatch(deleteTodo(item.id));
  };

  const goToDetail = (): void => {
    navigate(`/detail/${item.id}`);
  };

  return (
    <S.TodoItemLayout onClick={goToDetail}>
      <S.TodoItemTitle>{item.title}</S.TodoItemTitle>
      <S.TodoItemContent>{item.content}</S.TodoItemContent>
      <S.ButtonBox>
        <Button onClick={onClickDeleteTodo} $bc={'#ff1616'} type={'button'}>
          삭제하기
        </Button>
        <Button
          onClick={onClickSwitchStatus}
          $bc={item.isDone ? '#3c3030' : '#00b42e'}
          type={'button'}>
          {item.isDone ? '취소하기' : '완료하기'}
        </Button>
      </S.ButtonBox>
    </S.TodoItemLayout>
  );
};

export default TodoItem;
