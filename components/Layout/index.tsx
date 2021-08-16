import React, { useState } from 'react';
import { View, Logo, Header, Menu } from './styled';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { CgClose } from 'react-icons/cg';
import SideBarMenu from './SideBarMenu';

const NavBar = ({ children }) => {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <Header openMenu={menu}>
        <Menu
          onClick={() => {
            setMenu(!menu);
          }}
        >
          {menu ? (
            <CgClose size="30" color="" />
          ) : (
            <HiOutlineMenuAlt1 size="30" color="" />
          )}
        </Menu>
        <Logo src="../images/logo_color.svg" />
      </Header>
      <SideBarMenu openMenu={menu} />
      <View openMenu={menu} onClick={() => setMenu(false)}>{children}</View>
    </>
  );
};

export default NavBar;
