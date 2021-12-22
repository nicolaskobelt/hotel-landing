import React from 'react';
import { Image, ImageOuter } from './styled';
import Blur from '../Misc/Blur';

interface ImageModalProps {
  uri: string;
  alt: string;
  position: number;
  closeModal: (state: boolean) => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ uri, alt, closeModal, position }) => {
  return (
    <>
      <ImageOuter position={position} onClick={() => closeModal(false)}>
        <Image src={uri} alt={alt} />
      </ImageOuter>
      <Blur />
    </>
  );
};

export default ImageModal;
