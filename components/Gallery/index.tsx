import React from 'react';
import { View, Image, ImageViewer } from './styled';
import ImagesUri from '../../constants/ImagesUri';
import Keys from '../../constants/Keys.json';
import { Title } from '../Base/Texts/styled';

const ImageGallery = () => {
  return (
    <View id="photos">
      <Title>Galería de Fotos</Title>
      <ImageViewer>
        {ImagesUri[Keys.breakfast].map(({ src, key }) => (
          <Image key={key} src={src} alt={key} />
        ))}
      </ImageViewer>
      <ImageViewer>
        {ImagesUri[Keys.pool].map(({ src, key }) => (
          <Image key={key} src={src} alt={key} />
        ))}
      </ImageViewer>
    </View>
  );
};

export default ImageGallery;
