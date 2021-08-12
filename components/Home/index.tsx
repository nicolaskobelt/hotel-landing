import React from 'react';
import { View, Title, Image } from './styled';
import NavBar from '../Layout';

const Home = () => {
  return (
    <NavBar>
      <Image src={'../images/hero.jpg'} alt="Hero Image" />
    </NavBar>
  );
};

export default Home;
