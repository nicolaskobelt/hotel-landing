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
  PeriodDisclaimer,
  CurrencyTitle,
  Miscellaneous,
} from './styled';
import { Title } from '../Base/Texts/styled';
import { useEffect } from 'react';
import axios from 'axios';
import Loader from '../Base/Loader';

const Rates = ({ translate }) => {
  const [rates, setRates] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const path = `${process.env.NEXT_PUBLIC_API_URL}/rooms/rates`;
  const underReview = true;

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

  if (loading) {
    return (
      <View>
        <Miscellaneous>{translate('rates.loading')}</Miscellaneous>
        <Loader />
      </View>
    );
  }

  if (!rates) {
    return (
      <View>
        <Title>{translate('rates.title')}</Title>
        <Period>{translate('rates.unavailable')}</Period>
      </View>
    );
  }

  return (
    <View id="rates">
      <Title>{translate('rates.title')}</Title>
      {underReview ? (
        <Miscellaneous>{translate('rates.underReview')}</Miscellaneous>
      ) : (
        <>
          <CurrencyTitle>{translate('rates.currency')}</CurrencyTitle>
          <RatesContainer>
            <PeriodContainer>
              <Period>
                {rates[0][1] ? `${rates[0][0]} - ${rates[0][1]}` : rates[0][0]}
              </Period>
              {rates[0][2] && (
                <PeriodDetail>
                  {rates[0][2]} al {rates[0][3]}
                </PeriodDetail>
              )}
              {rates[1].map((item, index) => (
                <Room key={index}>
                  <RoomName>{item}</RoomName>
                  <RoomPrice>{`$ ${rates[2][index]}.`}</RoomPrice>
                </Room>
              ))}
              <PeriodDisclaimer>{rates[3][0]}</PeriodDisclaimer>
            </PeriodContainer>
            <Spacer />
            <PeriodContainer>
              <Period>
                {rates[4][1] ? `${rates[4][0]} - ${rates[4][1]}` : rates[4][0]}
              </Period>
              {rates[4][2] && (
                <PeriodDetail>
                  {rates[4][2]} al {rates[4][3]}
                </PeriodDetail>
              )}
              {rates[5].map((item, index) => (
                <Room key={index}>
                  <RoomName>{item}</RoomName>
                  <RoomPrice>{`$ ${rates[6][index]}.`}</RoomPrice>
                </Room>
              ))}
              <PeriodDisclaimer>{rates[7][0]}</PeriodDisclaimer>
            </PeriodContainer>
          </RatesContainer>
        </>
      )}
    </View>
  );
};

export default Rates;
