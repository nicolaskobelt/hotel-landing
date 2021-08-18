import React, { useState } from 'react';
import { View } from './styled';
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
  return (
    <View>
      <Title>{translate('rates.title')}</Title>

    </View>
  );
};

export default Rates;
