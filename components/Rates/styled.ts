import styled from '@emotion/styled';

export const View = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 20px;
`;

export const RatesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media (min-width: 230px) and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const PeriodContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 500px;
`;

export const Period = styled.p`
  font-size: 20px;
  font-weight: bold;
  font-family: ${({ theme }) => theme.fontFamily.primary};
  margin: 5px 0;
`;

export const PeriodDetail = styled.p`
  font-size: 12px;
  font-style: italic;
  font-family: ${({ theme }) => theme.fontFamily.primary};
  margin: 0 0 15px 0;
`;

export const Room = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  margin-bottom: 10px;
`;


export const RoomName = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  font-size: 18px;
  font-weight: bold;
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  margin: 0 15px 0 0;
`;

export const RoomPrice = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  font-size: 18px;
  font-style: italic;
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  margin: 0;
`;

//Temporal
export const Spacer = styled.div`
  width: 35px;

  @media (min-width: 230px) and (max-width: 768px) {
    height: 35px;
  }
  
`;