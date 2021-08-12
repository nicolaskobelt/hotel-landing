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
  top: 10px;
  height: 130px;
  align-self: center;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 230px) and (max-width: 768px) {
    height: 100px;
  }
`;

export const Menu = styled.div`
  position: absolute;
  top: 35px;
  left: 40px;
  cursor: pointer;
`;

export const Logo = styled.img`
  height: 120px;

  @media (min-width: 230px) and (max-width: 768px) {
    height: 80px;
  }
`;
