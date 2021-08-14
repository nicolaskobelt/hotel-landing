import React, { useState } from 'react';
import CURRENT_LANG from '../../constants/wording';
import { BiCoffee, BiSwim, BiBed, BiPlusCircle } from 'react-icons/bi';
import { FaParking } from 'react-icons/fa';
import {
  View,
  Card,
  CardTop,
  CardsContainer,
  CardBottom,
  Icon,
} from './styled';
import { Title, CardTitle } from '../Base/Texts/styled';

const Services = () => {
  const [openToggle, setOpenToggle] = useState(null);
  const [services, setServices] = React.useState([
    {
      id: 1,
      title: CURRENT_LANG.services.breakfast.title,
      description: CURRENT_LANG.services.breakfast.description,
      icon: <BiCoffee size="25px" />,
    },
    {
      id: 2,
      title: CURRENT_LANG.services.pool.title,
      description: CURRENT_LANG.services.pool.description,
      icon: <BiSwim size="25px" />,
    },
    {
      id: 3,
      title: CURRENT_LANG.services.rooms.title,
      description: CURRENT_LANG.services.rooms.description,
      icon: <BiBed size="25px" />,
    },
    {
      id: 4,
      title: CURRENT_LANG.services.garage.title,
      description: CURRENT_LANG.services.garage.description,
      icon: <FaParking size="25px" />,
    },
    {
      id: 5,
      title: CURRENT_LANG.services.more.title,
      description: CURRENT_LANG.services.more.description,
      icon: <BiPlusCircle size="25px" />,
    },
  ]);

  return (
    <View>
      <Title>Servicios</Title>
      <CardsContainer>
        {services.map((service, index) => (
          <Card
            key={service.id}
            onClick={() => setOpenToggle(index)}
            openCard={openToggle === index}
          >
            <CardTop>
              <Icon>{service?.icon}</Icon>
              <CardTitle>{service.title}</CardTitle>
            </CardTop>
            <CardBottom openCard={openToggle === index}>
              {service.description}
            </CardBottom>
          </Card>
        ))}
      </CardsContainer>
    </View>
  );
};

export default Services;
