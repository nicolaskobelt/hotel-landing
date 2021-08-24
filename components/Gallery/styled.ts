import styled from '@emotion/styled';

export const View = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: scroll;
`;

export const ImageViewer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  overflow: auto;
`;

export const Image = styled.img`
  width: 180px; 
  margin: 10px;
  border-radius: 10px;
`;