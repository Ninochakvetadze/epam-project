import React from 'react';
import { FaEnvelope, FaFacebook, FaPhone, FaSkype, FaTwitter } from 'react-icons/fa';


const addressData = [
  {
    icon: <FaEnvelope className='firstTwoIcons' />,
    label: "500 342 342",
  },
  {
    icon: <FaPhone className='firstTwoIcons' />,
    label: "office@kamsolutions.pl",
  },
  {
      icon: <FaTwitter className='socailIcon' />,
      label: 'Twitter',
      link: 'https://twitter.com/wordpress',
    },
    {
      icon: <FaFacebook className='socailIcon' />,
      label: 'Facebook',
      link: 'https://facebook.com/facebook',
    },
    {
      icon: <FaSkype className='socailIcon' />,
      label: 'Skype',
      link: 'kamsolutions.pl',
    },
]

export default addressData;