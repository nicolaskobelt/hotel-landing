import React, { useState } from 'react';
import { View, ImageViewer, Image } from './styled';
import ImagesUri from '../../constants/ImagesUri';
import { Title } from '../Base/Texts/styled';
import ImageModal from '../ImageModal';
import { isSafari } from 'react-device-detect';

const ImageGallery = () => {
  const [modal, setModal] = useState(false);
  const [windowPos, setWindowPos] = useState(0);
  const [alt, setAlt] = useState('');
  const [uri, setUri] = useState('');

  const openModal = (uri: string, alt: string) => {
    setModal(true);
    setUri(uri);
    setAlt(alt);
    setWindowPos(window.scrollY);
  };

  const getSrc = (id: string) => {
    return `https://casablanca-photos.sfo3.digitaloceanspaces.com/${id}`;
  };

  return (
    <>
      <View id="photos">
        <Title>Galería de Fotos</Title>
        <ImageViewer>
          {ImagesUri.map(({ src, key, id, alt }) => (
            <Image
              isSafari={isSafari}
              onClick={() => openModal(getSrc(src), alt)}
              key={`${id}-${key}`}
              src={getSrc(src)}
              alt={key}
            />
          ))}
        </ImageViewer>
      </View>
      {modal && (
        <ImageModal
          position={windowPos}
          uri={uri}
          alt={alt}
          closeModal={setModal}
        />
      )}
    </>
  );
};

export default ImageGallery;
