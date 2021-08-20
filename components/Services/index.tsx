import React, { useState } from 'react';
import CURRENT_LANG from '../../constants/wording';
import { BiCoffee, BiSwim, BiBed, BiPlusCircle } from 'react-icons/bi';
import { FaParking } from 'react-icons/fa';
import { CSSTransition } from 'react-transition-group';
import {
  View,
  Card,
  CardTop,
  CardsContainer,
  Container,
  OutterCard,
  InnerCard,
  Images,
  CardText,
  Icon,
} from './styled';
import { Title, CardTitle } from '../Base/Texts/styled';
import { useRatesData } from '../../hooks';

const Services = ({ translate }) => {
  const [openToggle, setOpenToggle] = useState(null);
  const [services, setServices] = React.useState([
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
      translate: 'parking',
      icon: <FaParking size="25px" />,
    },
    {
      id: 5,
      translate: 'more',
      icon: <BiPlusCircle size="25px" />,
    },
  ]);

  return (
    <View>
      <a name="services" />
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
