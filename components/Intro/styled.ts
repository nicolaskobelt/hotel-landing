import styled from '@emotion/styled';

export const View = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  padding: 15px;
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  font-size: 14px;
  text-align: center;
`;

export const Spacer = styled.div`
  height: 7px;
`