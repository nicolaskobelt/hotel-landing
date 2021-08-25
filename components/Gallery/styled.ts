import styled from '@emotion/styled';

export const View = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: scroll;
`;

export const ImageViewer = styled.div`
  display: flex;
  width: 1200px;
  flex-direction: row;
  overflow: auto;
  flex-wrap: wrap;

  @media (min-width: 230px) and (max-width: 768px) {
    width: 100%;
    flex-wrap: nowrap;
    padding: 0 20px
  };
`;

export const Image = styled.img`
  width: 250px; 
  margin: 5px;
  height: ${({ isSafari }) => isSafari ? '180px' : 'auto'};
  border-radius: 2px 12px 12px 12px;
`;