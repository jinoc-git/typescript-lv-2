import styled from 'styled-components';

export const MainLayout = styled.main`
  width: 100%;
`

export const LoadingBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 380px);
  min-width: 360px;
  background-color: #ffffff;
`;

export const Loading = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: #f2f2f2;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  animation: pulse 1.5s ease-in-out infinite;

  &:before {
    content: '';
    display: block;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    border: 8px solid #ff7c1d;
    border-color: #ff7c1d transparent #ff7c1d transparent;
    animation: loader 1.2s linear infinite;
  }

  @keyframes loader {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes pulse {
    0% {
      transform: scale(0.8);
      opacity: 0.5;
    }
    50% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      transform: scale(0.8);
      opacity: 0.5;
    }
  }
`;