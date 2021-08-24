import styled from '@emotion/styled';

export const Title = styled.p`
  font-size: 28px;
  font-weight: bold;
  font-family: ${({ theme }) => theme.fontFamily.primary};
  color: ${({ theme, color }) => color ? color : theme.color.text};
  z-index: 1;

  @media (min-width: 230px) and (max-width: 768px) {
    font-size: 24px;
  };
`;
