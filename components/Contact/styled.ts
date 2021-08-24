import styled from '@emotion/styled';

export const View = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 15px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  height: auto;
  flex-wrap: wrap;
  width: 90%;
  justify-content: center;
`;

export const ContactButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  width: 100px;
  border-radius: 20px;
  margin: 0 15px 15px 0;
  cursor: pointer;
  color: ${({ theme }) => theme.color.text};
  transition: all 0.3s ease;
  background: ${({ theme }) => theme.color.background};
  box-shadow: ${({ theme }) => theme.color.shadow};

  &:hover {
    color: ${({ theme }) => theme.color.textAlt};
    background-color: ${({ theme, name }) => theme.color[name]};
  }
`;

export const Map = styled.iframe`
  width: 100%;
  max-width: 450px;
  height: 400px;
  border: none;
  border-radius: 15px;
  box-shadow: ${({ theme }) => theme.color.shadow};
`;
