import styled from '@emotion/styled';

export const Sidebar = styled.div`
  position: fixed;
  top: 25px;
  left: ${({ openMenu }) => openMenu ? '20px' : '-100%'};
  width: 250px;
  height: 90%;
  background-color: ${({ theme }) => theme.color.background};
  box-shadow: ${({ theme }) => theme.color.shadow};
  border-radius: 25px;
  transition: 500ms;
`;

export const SideBarContainer = styled.div`
  width: 250px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Items = styled.div`
  height: 300px;
  width: 100%;
  margin-top: 100px;
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
