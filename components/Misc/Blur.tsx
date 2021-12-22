import styled from '@emotion/styled';

const View = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: ${({ theme }) => theme.color.backgroundTransparent};
  backdrop-filter: blur(5px);
  z-index: 11;
  transition: 500ms;
`;

export default View;
