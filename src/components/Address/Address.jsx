import React from 'react';
import { FaEnvelope, FaFacebook, FaPhone, FaSkype, FaTwitter } from 'react-icons/fa';

const Address = () => {
  const name = "Your Name";
  const address = "123 Address St, City, Country";
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
      <h3 className="addressName">{name}</h3>
      <p className="addressLine">{address}</p>
      <p className="addressLine">
        <span className="addressLabel"><FaEnvelope /></span>{' '}
        <a href={`mailto:${email}`} onClick={handleEmailClick}>
          {email}
        </a>
      </p>
      <p className="addressLine">
        <span className="addressLabel"><FaPhone /></span> {phone}
      </p>
      <p className="addressLine">
        <span className="addressLabel">
          <FaTwitter />
          Twitter</span>{' '}
        <a href={twitter} onClick={handleTwitterClick}>
          {twitter}
        </a>
      </p>
      <p className="addressLine">
        <span className="addressLabel">
          <FaFacebook />
          Facebook</span>{' '}
        <a
          href={facebook}
          onClick={handleFacebookClick}
        >
          {facebook}
        </a>
      </p>
      <p className="addressLine">
        <span className="addressLabel">
          <FaSkype />
          Skype</span>{' '}
        <a href={`skype:${skype}?chat`} onClick={handleSkypeClick}>
          {skype}
        </a>
      </p>
    </div>
  );
};

export { Address };
