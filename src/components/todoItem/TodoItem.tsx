import * as S from './style';
import Todo from '../../interfaces/Todo';
import Button from '../common/button/Button';

interface TodoItemProps {
  item: Todo;
  isDone: boolean;
  switchTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
}

const TodoItem = ({ item, isDone, switchTodo, deleteTodo }: TodoItemProps) => {
  return (
    <S.TodoItemLayout>
      <S.TodoItemTitle>{item.title}</S.TodoItemTitle>
      <S.TodoItemContent>{item.content}</S.TodoItemContent>
      <S.ButtonBox>
        <Button onClick={() => deleteTodo(item.id)} $bc={'#ff1616'}>
          삭제하기
        </Button>
        <Button
          $bc={isDone ? '#3c3030' : '#00b42e'}
          onClick={() => switchTodo(item.id)}>
          {isDone ? '취소하기' : '완료하기'}
        </Button>
      </S.ButtonBox>
    </S.TodoItemLayout>
  );
};

export default TodoItem;
