import React from 'react';
import { View, Spacer, Text } from './styled';

const Intro = () => {
  return (
    <View>
      <Text>
        Nos encanta que hayas elegido nuestro hotel para tu estadía en la ciudad
        y estamos seguros que será inolvidable. Tanto para quien quiere hacer
        turismo por varios días o una escapada, como para quien viene por
        trabajo. <br />
        <Spacer />
        Ubicados en pleno centro, podes dejar el auto y conocer nuestra ciudad a
        pie o decidirte por un recorrido más extenso por los más bellos paisajes
        del Valle de Calamuchita, con sus ríos, lagos y sierras como marco. <br />
        <Spacer />
        Nuestro personal está capacitado para recibirte, asesorarte y atender
        tus consultas con la calidez que nos identifica. <br />
        <Spacer />Y en el hotel podés disfrutar nuestra pileta climatizada con
        solarium (cubierta de marzo a noviembre, descubierta de diciembre a
        marzo).
      </Text>
    </View>
  );
};

export default Intro;
