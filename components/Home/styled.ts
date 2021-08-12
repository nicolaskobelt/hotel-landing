import styled from '@emotion/styled';

export const View = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
`;

export const Logo = styled.img`
  width: 100%;
`

export const Image = styled.img`
  position: absolute;
  object-fit: cover;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
`;

