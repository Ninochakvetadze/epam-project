import React from 'react';
import { FaEnvelope, FaFacebook, FaPhone, FaSkype, FaTwitter } from 'react-icons/fa';

const Address = () => {
  const phone = "500 342 342";
  const email = "office@kamsolutions.pl";
  const twitter = "https://twitter.com/wordpress";
  const facebook = "https://facebook.com/facebook";
  const skype = "kamsolutions.pl";

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  const handleTwitterClick = () => {
    window.open(twitter, '_blank');
  };

  const handleFacebookClick = () => {
    window.open(facebook, '_blank');
  };

  const handleSkypeClick = () => {
    window.location.href = `skype:${skype}?chat`;
  };

  return (
    <div className="address">
      <h1>Contacts</h1>
      <div className="addressList">
        <div className="addressLine">
        <span className="addressLabel"><FaEnvelope className='socailIcon'/></span>{' '}
        <a 
          href={`mailto:${email}`} 
          onClick={handleEmailClick} 
          className='socialLink'
          target='_blank' rel="noreferrer">
          {email}
        </a>
      </div>
      <div className="addressLine">
        <span className="addressLabel"><FaPhone className='socailIcon'/></span> {phone}
      </div>
      <div className="socialLine">
        <span className="addressLabel">
          <FaTwitter className='socailIcon'/>
          Twitter</span>{' '}
        <a 
          href={twitter} 
          onClick={handleTwitterClick} 
          className='socialLink'
          target='_blank' rel="noreferrer">
          {twitter}
        </a>
      </div>
      <div className="socialLine">
        <span className="addressLabel">
          <FaFacebook className='socailIcon'/>
          Facebook</span>{' '}
        <a
          href={facebook}
          onClick={handleFacebookClick}
          className='socialLink'
          target='_blank' rel="noreferrer"
        >
          {facebook}
        </a>
      </div>
      <div className="socialLine">
        <span className="addressLabel">
          <FaSkype className='socailIcon'/>
          Skype</span>{' '}
        <a 
          href={`skype:${skype}?chat`} 
          onClick={handleSkypeClick}
          className='socialLink'
          target='_blank' rel="noreferrer">
          {skype}
        </a>
      </div>
      </div>
      
    </div>
  );
};

export { Address };
