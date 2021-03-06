import styled from '@emotion/styled';

export const View = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0 0 0;
  background-color: ${({ theme }) => theme.color.footerBackground};
  border-radius: 25px 25px 0 0;
`;

export const OtasContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Ota = styled.a`
  height: 50px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-right: 20px;
  color: ${({ theme }) => theme.color.textAlt};

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.color.hover};
  }
`;

export const Direction = styled.a`
  font-size: 14px;
  text-align: center;
  color: ${({ theme }) => theme.color.textAlt};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  margin-bottom: 20px;
`;

export const Copyright = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 35px;
  background-color: ${({ theme }) => theme.color.pureBlack};
  text-align: center;
  font-size: 12px;
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  color: ${({ theme }) => theme.color.textAlt};
`
