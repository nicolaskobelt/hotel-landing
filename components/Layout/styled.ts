import styled from '@emotion/styled';

export const View = styled.div`
  margin-top: -70px;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.div`
  position: sticky;
  z-index: 100;
  top: 0;
  height: 90px;
  align-self: center;
  border-radius: ${({ openMenu }) => openMenu ? 0 : '0 0 25px 25px'};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.backgroundTransparent};
  backdrop-filter: blur(5px);
`;

export const Menu = styled.div`
  position: absolute;
  top: 35px;
  left: 40px;
  cursor: pointer;

  @media (min-width: 230px) and (max-width: 768px) {
    left: 25px;
  }
`;

export const Logo = styled.img`
  height: 80px;

  @media (min-width: 230px) and (max-width: 768px) {
    height: 80px;
  }
`;
