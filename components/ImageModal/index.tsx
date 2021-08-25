import React from 'react';
import { View, Image } from './styled';

const ImageModal = ({ position, uri, alt, display, closeModal }) => {

  return (
    <View onClick={() => closeModal(false)} open={display} position={position}>
      <Image src={uri} alt={alt} />
    </View>
  );
};

export default ImageModal;