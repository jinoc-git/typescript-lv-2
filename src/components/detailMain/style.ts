import styled from 'styled-components';

export const DetailLayout = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1200px;
  height: calc(100vh - 40px);
  margin: 0 auto;
`;

export const DetailItem = styled.div`
  width: 500px;
  height: 300px;
  padding: 20px;
  border: 1px solid #ff5817;
  border-radius: 12px;
`;

export const ItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 40px;
`;

export const ItemId = styled.p``;

export const ItemBody = styled.div`
  width: 100%;
`;

export const ItemTitle = styled.h3`
  margin-bottom: 20px;
  font-size: 22px;
  font-weight: 700;
`;

export const ItemContent = styled.p``;
