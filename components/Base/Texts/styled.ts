import styled from '@emotion/styled';

export const Title = styled.p`
  font-size: 22px;
  font-weight: bold;
  font-family: ${({ theme }) => theme.fontFamily.primary};
  color: ${({ theme, color }) => color ? color : theme.color.text};
`;

export const CardTitle = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  font-family: ${({ theme }) => theme.fontFamily.primary};
`;
