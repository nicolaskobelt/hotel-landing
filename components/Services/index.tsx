import React, { useState } from 'react';
import { BiCoffee, BiSwim, BiBed, BiPlusCircle, BiSpa } from 'react-icons/bi';
import { FaParking } from 'react-icons/fa';
import {
  View,
  Card,
  CardTop,
  OutterCard,
  InnerCard,
  CardText,
  Icon,
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
      icon: <BiSpa size="30px" />
    },
    {
      id: 4,
      translate: 'parking',
      icon: <FaParking size="25px" />,
    },
    {
      id: 5,
      translate: 'more',
      icon: <BiPlusCircle size="25px" />,
    },
  ];

  return (
    <View id="services">
      <Title>{translate('services.title')}</Title>
      {services.map((service, index) => (
        <OutterCard key={service.id}>
          <InnerCard>
            <Card
              onClick={() => setOpenToggle(index)}
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
          </InnerCard>
        </OutterCard>
      ))}
    </View>
  );
};

export default Services;
