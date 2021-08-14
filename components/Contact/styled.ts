import styled from '@emotion/styled';

export const View = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: center;
  align-self: center;
  height: 100%;
  width: 100%;
  max-width: 500px;
  padding: 15px;
`;

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
