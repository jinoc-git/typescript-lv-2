import * as S from './style';
import Todo from '../../interfaces/Todo';
import Button from '../common/button/Button';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../redux/config/configStore';
import { __switchTodo, __deleteTodo } from '../../redux/modules/todosSlice';

interface TodoItemProps {
  item: Todo;
}

const TodoItem = ({ item }: TodoItemProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onClickSwitchStatus = (
    e: React.MouseEvent<HTMLButtonElement>
  ): void => {
    e.stopPropagation();
    dispatch(__switchTodo(item));
  };

  const onClickDeleteTodo = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    dispatch(__deleteTodo(item.id));
  };

  const goToDetail = () => {
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
          type={'button'}
          $bc={item.isDone ? '#3c3030' : '#00b42e'}
          onClick={onClickSwitchStatus}>
          {item.isDone ? '취소하기' : '완료하기'}
        </Button>
      </S.ButtonBox>
    </S.TodoItemLayout>
  );
};

export default TodoItem;
