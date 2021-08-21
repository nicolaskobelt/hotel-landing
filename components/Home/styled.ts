import styled from '@emotion/styled';
import Image from 'next/image';

export const View = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.img`
  width: 100%;
`

export const ImageStyled = styled(Image)`
  position: absolute;
  object-fit: cover;
  top: 0;
  left: 0;
  z-index: 0;
`;

