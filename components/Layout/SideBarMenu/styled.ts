import styled from '@emotion/styled';

export const Sidebar = styled.div`
  position: fixed;
  top: ${({ openMenu }) => openMenu ? '90px' : '-100%'};
  left: 0;
  width: 100%;
  height: auto;
  background-color: ${({ theme }) => theme.color.backgroundTransparent};
  backdrop-filter: blur(5px);
  border-radius: 0 0 25px 25px;
  transition: 500ms;
`;

export const SideBarContainer = styled.div`
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Items = styled.div`
  height: auto;
  width: 100%;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Item = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  font-family: ${({ theme }) => theme.fontFamily.primary};
  color: ${({ theme }) => theme.color.text};

  &:hover {
    background-color: ${({ theme }) => theme.color.hover};
    color: ${({ theme }) => theme.color.textAlt};
  }
`;

export const Icon = styled.div`
  margin-left: 20px;
`

export const Text = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.primary};
  margin-left: 10px;
  font-size: 18px;
`;
