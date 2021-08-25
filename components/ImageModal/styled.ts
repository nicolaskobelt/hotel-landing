import styled from '@emotion/styled';

export const View = styled.div`
  display: ${({ open }) => open ? 'flex' : 'none'};
  position: absolute;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  top: ${({ position }) => position}px;
  overflow: hidden;
  left: 0;
  background-color: ${({ theme }) => theme.color.backgroundModal};
  backdrop-filter: blur(5px);
  z-index: 11;
  transition: all 1s ease;
`;

export const Image = styled.img`
  position: relative;
  width: auto;
  height: 60%;
  z-index: 12;
  border-radius: 20px;
  cursor: pointer;


  @media (min-width: 230px) and (max-width: 768px) {
    width: 95%;
    height: auto;
  };
`;
