import React, { useState } from 'react';
import {
  Period,
  Room,
  RoomName,
  RoomPrice,
  View,
  PeriodContainer,
  PeriodDetail,
  Spacer,
  RatesContainer,
} from './styled';
import { Title } from '../Base/Texts/styled';
import { useEffect } from 'react';
import axios from 'axios';

const Rates = ({ translate }) => {
  const [rates, setRates] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const path = `${process.env.NEXT_PUBLIC_API_URL}/rooms/rates`;

  useEffect(() => {
    const getRates = async () => {
      setLoading(true);
      if (!rates) {
        try {
          const response = await axios.get(path);
          setRates(response?.data);
          setLoading(false);
        } catch ({ message }) {
          setError(message);
          setLoading(false);
        }
      }
      setLoading(false);
    };
    getRates();
  }, [rates, path]);

  console.log(rates);

  if (loading) {
    return <View>Cargando</View>;
  }

  return (
    <View>
      <Title>{translate('rates.title')}</Title>
      <RatesContainer>
      <PeriodContainer>
        <Period>{rates[0][0]} - {rates[0][1]}</Period>
        <PeriodDetail>{rates[0][2]} al {rates[0][3]}</PeriodDetail>
        {rates[1].map((item, index) => (
          <Room key={index}>
            <RoomName>{item}</RoomName>
            <RoomPrice>{`$ ${rates[2][index]}.`}</RoomPrice>
          </Room>
        ))}
      </PeriodContainer>
      <Spacer />
      <PeriodContainer>
      <Period>{rates[4][0]} - {rates[4][1]}</Period>
        <PeriodDetail>{rates[4][2]} al {rates[4][3]}</PeriodDetail>
        {rates[5].map((item, index) => (
          <Room key={index}>
            <RoomName>{item}</RoomName>
            <RoomPrice>{`$ ${rates[6][index]}.`}</RoomPrice>
          </Room>
        ))}
      </PeriodContainer>
      </RatesContainer>
    </View>
  );
};

export default Rates;
