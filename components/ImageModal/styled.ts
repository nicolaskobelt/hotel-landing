import styled from '@emotion/styled';

interface ImageOuterProps {
  position: number;
}

export const ImageOuter = styled.div<ImageOuterProps>`
  position: absolute;
  top: ${({ position }) => position}px;
  left: 0;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  z-index: 12;
`;


export const Image = styled.img`
  width: auto;
  height: 60%;
  border-radius: 5px 20px 20px 20px;
  cursor: pointer;  
  transition: all 0.5s ease;

  @media (min-width: 230px) and (max-width: 768px) {
    width: 95%;
    height: auto;
  };
`;
