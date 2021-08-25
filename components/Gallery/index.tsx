import React, { useState } from 'react';
import { View, Image, ImageViewer } from './styled';
import ImagesUri from '../../constants/ImagesUri';
import { Title } from '../Base/Texts/styled';
import ImageModal from '../ImageModal';
import { isSafari } from 'react-device-detect';

const ImageGallery = () => {
  const [modal, setModal] = useState(false);
  const [windowPos, setWindowPos] = useState(0);
  const [uri, setUri] = useState('');

  const openModal = (uri) => {
    setModal(true);
    setUri(uri);
    setWindowPos(window.scrollY);
  };

  return (
    <>
      <View id="photos">
        <Title>Galería de Fotos</Title>
        <ImageViewer>
          {ImagesUri.map(({ src, key, id }) => (
            <Image
              isSafari={isSafari}
              onClick={() => openModal(src)}
              key={`${id}-${key}`}
              src={src}
              alt={key}
            />
          ))}
        </ImageViewer>
      </View>
      <ImageModal
        position={windowPos}
        display={modal}
        uri={uri}
        closeModal={setModal}
      />
    </>
  );
};

export default ImageGallery;
