import React, { useState } from 'react';
import * as S from './style';
import Input from '../common/input/Input';
import Button from '../common/button/Button';
import shortid from 'shortid';
import Todo from '../../interfaces/Todo';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addTodo } from '../../api/todos';
import { AxiosError } from 'axios';

const Form = () => {
  const queryClient = useQueryClient();
  const addMutation = useMutation<void, AxiosError, Todo>(addTodo, {
    onSuccess: (): void => {
      queryClient.invalidateQueries(['todos']);
    },
  });
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const disabled: boolean = title.length < 3 || content.length < 3;

  const clearInput = (): void => {
    setTitle('');
    setContent('');
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const newTodo: Todo = {
      id: shortid.generate(),
      title,
      content,
      isDone: false,
    };
    addMutation.mutate(newTodo)
    clearInput();
  };

  return (
    <S.FormLayout onSubmit={onSubmitHandler}>
      <S.InputBox>
        <S.InputTitle>
          제목
          <Input
            value={title}
            onChange={({ target }) => {
              setTitle(target.value);
            }}
          />
        </S.InputTitle>
        <S.InputTitle>
          내용
          <Input
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
        </S.InputTitle>
      </S.InputBox>
      <Button disabled={disabled} type={'submit'}>
        추가하기
      </Button>
    </S.FormLayout>
  );
};

export default Form;
