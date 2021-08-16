import React from 'react';
import { Input, View, ButtonsContainer, ContactButton, Map } from './styled';
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
      <Title>Ubicación</Title>
        <Map
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d640.5774680174763!2d-64.53816955596731!3d-32.069591645328735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95d2bb45707078fd%3A0x11b74fc95aedaa90!2sCasablanca%20Hotel%20%26%20Spa!5e0!3m2!1sen!2sar!4v1629150750127!5m2!1sen!2sar"
          loading="lazy"
        />
    </View>
  );
};

export default Contact;
