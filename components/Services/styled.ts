import styled from '@emotion/styled';

export const View = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

export const OutterCard = styled.div`
  height: auto;
  width: 100%;
`

export const InnerCard = styled.div`
  padding: 0 20px;
`

export const Card = styled.div`
  height: ${({ openCard }) => (openCard ? 200 : 90)}px;
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: ${({ theme }) => theme.color.shadow};
  border-radius: 20px;
  margin-bottom: 35px;
  cursor: pointer;
  transition: all 0.5s ease;
  background: ${({ theme }) => theme.color.background};
  box-shadow: ${({ theme }) => theme.color.shadow};
`;

export const CardTop = styled.div`
  display: flex;
  align-items: center;
  height: 90px;
  width: 100%;
  padding: 10px 20px;
  font-size: 18px;
  font-weight: bold;
  font-family: ${({ theme }) => theme.fontFamily.primary};
  margin: 0;
  color: ${({ openCard, theme }) => (openCard ? theme.color.textAlt : theme.color.text)};
  background-color: ${({ openCard, theme }) => (openCard ? theme.color.hover : 'none')};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  flex-direction: row;
  transition: all 0.5s ease;
`;

export const CardText = styled.div`
  display: ${({ openCard }) => (openCard ? 'flex' : 'none')};
  height: 100%;
  width: 100%;
  padding: 5px 20px;
  margin-top: 10px;
  transition: all 1s ease;
`;

export const Container = styled.div`
  display: ${({ openCard }) => (openCard ? 'flex' : 'none')};
  flex-direction: row;
  height: auto;
  width: 100%;
  overflow: hidden;
  overflow-x: scroll;
  align-items: center;
  opacity: ${({ openCard }) => (openCard ? 1 : 0)};
  transition: all 1s ease-out;
`;

export const Images = styled.img`
  display: ${({ openCard }) => (openCard ? 'block' : 'none')};
  height: 100px;
  object-fit: cover;
  margin: 10px;
  border-radius: 10px;
  opacity: ${({ openCard }) => (openCard ? 1 : 0)};
  transition: all 0.7s ease-in-out;
`;

export const Icon = styled.div`
  width: 20px;
  margin-right: 20px;
`;
