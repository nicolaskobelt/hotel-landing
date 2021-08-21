import React from 'react';
import {
  BiHomeHeart,
  BiPhone,
  BiDollarCircle,
  BiDonateHeart,
  BiSpa,
  BiBed,
} from 'react-icons/bi';
import { Sidebar, SideBarContainer, Item, Items, Text, Icon } from './styled';
import Routes from '../../../configs/routes';

const SideBarMenu = ({ openMenu }) => {
  const icons = {
    home: <BiHomeHeart size="30px" />,
    rooms: <BiBed size="30px" />,
    services: <BiDonateHeart size="30px" />,
    contact: <BiPhone size="30px" />,
    rates: <BiDollarCircle size="30px" />,
    spa: <BiSpa size="30px" />,
  };

  return (
    <SideBarContainer>
      <Sidebar openMenu={openMenu}>
        <Items>
          {Routes.map((route) => (
            <Item
              key={route.id}
              to={route.id}
              activeClass="active"
              spy={true}
              smooth={true}
            >
              <Icon>{icons[route.icon]}</Icon>
              <Text>{route.name}</Text>
            </Item>
          ))}
        </Items>
      </Sidebar>
    </SideBarContainer>
  );
};

export default SideBarMenu;
