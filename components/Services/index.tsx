import React, { useState } from 'react';
import { BiCoffee, BiSwim, BiBed, BiPlusCircle, BiSpa } from 'react-icons/bi';
import { FaParking } from 'react-icons/fa';
import {
  View,
  Card,
  CardTop,
  CardText,
  Icon,
  ServiceContainer,
} from './styled';
import { Title } from '../Base/Texts/styled';

const Services = ({ translate }) => {
  const [openToggle, setOpenToggle] = useState(null);
  const services = [
    {
      id: 1,
      translate: 'breakfast',
      icon: <BiCoffee size="25px" />,
    },
    {
      id: 2,
      translate: 'pool',
      icon: <BiSwim size="25px" />,
    },
    {
      id: 3,
      translate: 'rooms',
      icon: <BiBed size="25px" />,
    },
    {
      id: 4,
      translate: 'spa',
      icon: <BiSpa size="30px" />,
    },
    {
      id: 5,
      translate: 'parking',
      icon: <FaParking size="25px" />,
    },
    {
      id: 6,
      translate: 'more',
      icon: <BiPlusCircle size="25px" />,
    },
  ];

  const openCard = (id: number) => {
    if (id === openToggle) {
      setOpenToggle(null);
    } else {
      setOpenToggle(id)
    }
  }

  return (
    <View id="services">
      <Title>{translate('services.title')}</Title>
      <ServiceContainer>
        {services.map((service, index) => (
          <Card
            key={service.id}
            onClick={() => openCard(index)}
            openCard={openToggle === index}
          >
            <CardTop openCard={openToggle === index}>
              <Icon>{service?.icon}</Icon>
              {translate(`services.${service.translate}.title`)}
            </CardTop>
            <CardText openCard={openToggle === index}>
              {translate(`services.${service.translate}.description`)}
            </CardText>
          </Card>
        ))}
      </ServiceContainer>
    </View>
  );
};

export default Services;
