import styled from '@emotion/styled';

export const View = styled.div`
  display: ${({ open }) => open ? 'flex' : 'none'};
  position: absolute;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  top: ${({ position }) =>  position}px;
  overflow: hidden;
  left: ${({ open }) => open ? 0 : '-100%'};
  background-color: ${({ theme }) => theme.color.backgroundTransparent};
  backdrop-filter: blur(5px);
  z-index: 11;
  transition: 500ms;
`;

export const Image = styled.img`
  position: relative;
  width: auto;
  height: 60%;
  z-index: 12;
  border-radius: 5px 20px 20px 20px;
  cursor: pointer;  
  transition: all 0.5s ease;

  @media (min-width: 230px) and (max-width: 768px) {
    width: 95%;
    height: auto;
  };
`;
