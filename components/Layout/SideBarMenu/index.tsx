import React from 'react';
import {
  BiHomeHeart,
  BiPhone,
  BiDollarCircle,
  BiDonateHeart,
  BiSpa,
  BiPhotoAlbum,
} from 'react-icons/bi';
import {
  Sidebar,
  SideBarContainer,
  Item,
  Items,
  Text,
  Icon,
  ItemHref,
} from './styled';
import Routes from '../../../configs/routes';

const SideBarMenu = ({ openMenu, closeMenu }) => {
  const icons = {
    home: <BiHomeHeart size="30px" />,
    services: <BiDonateHeart size="30px" />,
    photos: <BiPhotoAlbum size="30px" />,
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
              onClick={() => closeMenu(false)}
            >
              <Icon>{icons[route.icon]}</Icon>
              <Text>{route.name}</Text>
            </Item>
          ))}
          <ItemHref
            href="https://www.instagram.com/oasis.natacionyspa/"
            target="_blank"
            onClick={() => closeMenu(false)}
          >
            <Icon>{icons.spa}</Icon>
            <Text>OASIS Spa Urbano</Text>
          </ItemHref>
        </Items>
      </Sidebar>
    </SideBarContainer>
  );
};

export default SideBarMenu;
