import styled from '@emotion/styled';

export const View = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  height: 100%;
  width: 100%;
`;

export const Card = styled.div`
  height: ${({ openCard }) => (openCard ? '200px' : '100px')};
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: ${({ theme }) => theme.color.shadow};
  border-radius: 20px;
  padding: 20px;
  margin: 0 0 30px 0;
  cursor: pointer;
  transition: all 0.5s ease;
`;

export const CardsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

export const CardTop = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  align-items: center;
`;

export const CardBottom = styled.div`
  display: ${({ openCard }) => (openCard ? 'flex' : 'none')};
  height: 100%;
  width: 100%;
  transition: all 1s ease;
`

export const Icon = styled.div`
  width: 20px;
  margin-right: 20px;
`

