import styled from '@emotion/styled';

export const View = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  padding: 15px;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  max-width: 700px;
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  font-size: 18px;
  text-align: center;
  
  @media (min-width: 230px) and (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Spacer = styled.div`
  height: 12px;

  @media (min-width: 230px) and (max-width: 768px) {
    height: 7px;
  }
`;
