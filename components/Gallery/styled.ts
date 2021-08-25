import styled from '@emotion/styled';

export const View = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: scroll;
`;

export const ImageViewer = styled.div`
  display: flex;
  width: 1000px;
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
  width: 180px; 
  margin: 5px;
  border-radius: 2px 12px 12px 12px;
`;