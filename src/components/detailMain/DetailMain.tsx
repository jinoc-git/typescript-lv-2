import * as S from './style';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/config/configStore';
import Button from '../common/button/Button';

const DetailMain = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const todos = useSelector((state: RootState) => state.todos);
  const todo = todos.find((item) => item.id === id);

  const goToHome = () => {
    navigate('/');
  };

  if (!todo) {
    return <div>요청하신 todo는 없습니다</div>;
  }

  return (
    <S.DetailLayout>
      <S.DetailItem>
        <S.ItemHeader>
          <S.ItemId>ID: {todo.id}</S.ItemId>
          <Button type={'button'} onClick={goToHome}>
            이전으로
          </Button>
        </S.ItemHeader>
        <S.ItemBody>
          <S.ItemTitle>{todo.title}</S.ItemTitle>
          <S.ItemContent>{todo.content}</S.ItemContent>
        </S.ItemBody>
      </S.DetailItem>
    </S.DetailLayout>
  );
};

export default DetailMain;
