import React, { useState } from 'react';
import * as S from './style';
import Input from '../common/input/Input';
import Button from '../common/button/Button';
import shortid from 'shortid';
import Todo from '../../interfaces/Todo';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/modules/todos';

const Form = () => {
  const dispatch = useDispatch();
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
    dispatch(addTodo(newTodo));
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
