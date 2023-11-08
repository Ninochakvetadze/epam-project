import React from 'react';
import { FaEnvelope, FaLinkedin, FaFacebook, FaPhone, FaGithub } from 'react-icons/fa';


const addressData = [
  {
    icon: <FaEnvelope className='firstTwoIcons' data-testid="icon"/>,
    label: "N_chakvetadze@yahoo.com",
  },
  {
    icon: <FaPhone className='firstTwoIcons' data-testid="icon" />,
    label: "+995 598 908 850",
  },
  {
      icon: <FaGithub className='socailIcon' data-testid="icon"/>,
      label: 'GitHub',
      link: 'https://github.com/Ninochakvetadze',
    },
    {
      icon: <FaFacebook className='socailIcon' data-testid="icon"/>,
      label: 'Facebook',
      link: 'https://www.facebook.com/nino.chakvetadze.967?mibextid=ZbWKwL',
    },
    {
      icon: <FaLinkedin className='socailIcon' data-testid="icon"/>,
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/nino-chakvetadze-509738257',
    },
]

export default addressData;