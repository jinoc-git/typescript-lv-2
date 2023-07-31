import * as S from './style';
import Todo from '../../interfaces/Todo';
import Button from '../common/button/Button';
import { useDispatch } from 'react-redux';
import { deleteTodo, switchTodo } from '../../redux/modules/todos';

interface TodoItemProps {
  item: Todo;
}

const TodoItem = ({ item }: TodoItemProps) => {
  const dispatch = useDispatch();

  const onClickSwitchStatus = (id: string): void => {
    dispatch(switchTodo(id));
  };

  const onClickDeleteTodo = (id: string): void => {
    dispatch(deleteTodo(id));
  };

  return (
    <S.TodoItemLayout>
      <S.TodoItemTitle>{item.title}</S.TodoItemTitle>
      <S.TodoItemContent>{item.content}</S.TodoItemContent>
      <S.ButtonBox>
        <Button onClick={() => onClickDeleteTodo(item.id)} $bc={'#ff1616'}>
          삭제하기
        </Button>
        <Button
          $bc={item.isDone ? '#3c3030' : '#00b42e'}
          onClick={() => onClickSwitchStatus(item.id)}>
          {item.isDone ? '취소하기' : '완료하기'}
        </Button>
      </S.ButtonBox>
    </S.TodoItemLayout>
  );
};

export default TodoItem;
