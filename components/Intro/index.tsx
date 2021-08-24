import React from 'react';
import { View, Spacer, Text } from './styled';

const Intro = () => {
  return (
    <View>
      <Text>
        Nos encanta que nos hayas elegido para tu estadía en la ciudad y no
        dudamos será inolvidable. Tanto para quien quiere hacer turismo por
        varios días o una escapada, como para quien viene por trabajo. <br />
        <Spacer />
        Ubicados en pleno centro, podes dejar el auto y conocer nuestra ciudad a
        pie, o decidirte por recorrido más extenso por los mejores paisajes, con
        el río y las sierras como marco. <br />
        <Spacer />
        Nuestro personal está capacitado para recibirte, asesorarte,
        solucionarte cada consulta.
      </Text>
    </View>
  );
};

export default Intro;
