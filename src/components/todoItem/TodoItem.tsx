import * as S from './style';
import Todo from '../../interfaces/Todo';
import Button from '../common/button/Button';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { deleteTodo, switchTodo } from '../../api/todos';

interface TodoItemProps {
  item: Todo;
}

const TodoItem = ({ item }: TodoItemProps) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const switchMutation = useMutation<void, AxiosError, Todo>(switchTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries(['todos']);
    },
  });
  const deleteMutation = useMutation<void, AxiosError, string>(deleteTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries(['todos']);
    },
  });

  const onClickSwitchStatus = (
    e: React.MouseEvent<HTMLButtonElement>
  ): void => {
    e.stopPropagation();
    switchMutation.mutate(item);
  };

  const onClickDeleteTodo = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    deleteMutation.mutate(item.id);
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
