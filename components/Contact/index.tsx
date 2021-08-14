import React from 'react';
import { Input, View, ButtonsContainer, ContactButton } from './styled';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { FiMail } from 'react-icons/fi';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { Title } from '../Base/Texts/styled';

const Contact = () => {
  const social = [
    {
      icon: <AiOutlineWhatsApp size="40px" />,
      name: 'whatsapp',
      display: 'WhatsApp',
      href: 'https://wa.me/5493546450727',
    },
    {
      icon: <FiMail size="40px" />,
      name: 'email',
      display: 'Email',
      href: 'mailto:info@hotelcasablancacba.com.ar',
    },
    {
      icon: <FaFacebookF size="40px" />,
      name: 'facebook',
      display: 'Facebook',
      href: 'https://www.facebook.com/hotelcasablancacba',
    },
    {
      icon: <FaInstagram size="40px" />,
      name: 'instagram',
      display: 'Instagram',
      href: 'https://www.instagram.com/hotelcasablancacba/',
    },
  ];

  return (
    <View>
      <Title>Contacto</Title>
      <ButtonsContainer>
        {social.map((item) => (
          <ContactButton
            key={item.name}
            href={item.href}
            target="_blank"
            name={item.name}
          >
            {item.icon}
          </ContactButton>
        ))}
      </ButtonsContainer>
    </View>
  );
};

export default Contact;
