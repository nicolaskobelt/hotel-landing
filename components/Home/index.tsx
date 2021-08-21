import React from 'react';
import { ImageStyled } from './styled';
import NavBar from '../Layout';

const Home = () => {
  return (
    <NavBar>
      <ImageStyled src="/images/hero.jpg" alt="Home page image" layout="fill" id="home"/>
    </NavBar>
  );
};

export default Home;
