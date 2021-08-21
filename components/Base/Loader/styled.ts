import styled from '@emotion/styled';
import { BiLoader } from 'react-icons/bi';
import { keyframes } from '@emotion/react'

export const roll = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const View = styled(BiLoader)`
  animation: ${roll} 3s infinite;
  transform: rotate(30deg);
`;
