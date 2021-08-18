import styled from '@emotion/styled';

export const Title = styled.p`
  font-size: 24px;
  font-weight: bold;
  font-family: ${({ theme }) => theme.fontFamily.primary};
  color: ${({ theme, color }) => color ? color : theme.color.text};
`;
