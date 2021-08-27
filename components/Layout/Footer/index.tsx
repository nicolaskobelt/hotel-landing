import React from 'react';
import { Title } from '../../Base/Texts/styled';
import { Ota, OtasContainer, View, Direction, Copyright } from './styled';
import { FaTripadvisor, FaGoogle } from 'react-icons/fa';
import { useTheme } from '@emotion/react';

const Footer = () => {
  const theme = useTheme();
  const otas = [
    {
      id: 'tripadvisor',
      name: 'TripAdvisor',
      href: 'https://www.tripadvisor.es/Hotel_Review-g312773-d4601267-Reviews-Casablanca_Hotel_Spa-Santa_Rosa_de_Calamuchita_Province_of_Cordoba_Central_Argentina.html',
      icon: <FaTripadvisor size="35px" />,
    },
    {
      id: 'google',
      name: 'Google',
      href: 'https://www.google.com.ar/travel/hotels/entity/CgoIkNW215X509sREAE/reviews?g2lb=2502548%2C2503771%2C2503781%2C4258168%2C4270442%2C4306835%2C4308227%2C4317915%2C4371334%2C4401769%2C4419364%2C4429192%2C4515404%2C4518327%2C4545890%2C4561952%2C4596364%2C4598963%2C4599969%2C4270859%2C4284970%2C4291517&hl=es-419&gl=ar&ssta=1&rp=EJDVtteV-dPbERCQ1bbXlfnT2xE4AkAASAHAAQI&ictx=1&sa=X&ved=0CAAQ5JsGahcKEwiIpa3fwLbyAhUAAAAAHQAAAAAQBQ&utm_campaign=sharing&utm_medium=link&utm_source=htls&ts=CAESABpJCisSJzIlMHg5NWQyYmI0NTcwNzA3OGZkOjB4MTFiNzRmYzk1YWVkYWE5MBoAEhoSFAoHCOUPEAgYHxIHCOUPEAkYARgBMgIQACoJCgU6A0FSUxoA',
      icon: <FaGoogle size="30px" />,
    },
  ];

  return (
    <View>
      <Title color={theme.color.textAlt}>Hotel Casablanca</Title>
      <Direction href="https://g.page/hotelcasablancacba?share" target="_blank">
        Santa Rosa de Calamuchita, Córdoba, Argentina.
      </Direction>
      <OtasContainer>
        {otas.map((ota) => (
          <Ota href={ota.href} target="_blank" key={ota.id}>
            {ota.icon}
          </Ota>
        ))}
      </OtasContainer>
      <Copyright>
        © {new Date().getFullYear()} Hotel Casablanca. Todos los derechos
        reservados.
      </Copyright>
    </View>
  );
};

export default Footer;
