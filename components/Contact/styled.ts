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
`

export const ContactButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  width: 100px;
  border-radius: 20px;
  margin: 0 15px 15px 0;
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.color.shadow};
  color: ${({ theme }) => theme.color.text};
  transition: all 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.color.textAlt};
    background-color: ${({ theme, name }) => theme.color[name]};
  }
`

export const Input = styled.input`
  all: unset;
  display: block;
  margin: 0;
  width: 100%;
  box-sizing: border-box;
  padding: 15px;
  color: ${({ error, theme }) =>
    error ? theme.color.red : theme.color.text};
  border: thin solid ${({ theme }) => theme.color.text};
  border-radius: 12px;
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  font-size: 16px;
  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    opacity: 1; /* Firefox */
    color: ${({ theme }) => theme.color.placeholder};
  }
  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: ${({ theme }) => theme.color.placeholder};
  }
  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: ${({ theme }) => theme.color.placeholder};
  }
`;
