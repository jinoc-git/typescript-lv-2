import styled from 'styled-components';

export const TodoItemLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
  width: 300px;
  height: 200px;
  border: 2px solid;
  border-radius: 12px;
  cursor: pointer;
`;

export const TodoItemTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
`;

export const TodoItemContent = styled.p``;

export const ButtonBox = styled.div`
  display: flex;
  gap: 20px;
`