import React from 'react';
import addressData from './AddressData';

const Address = () => {
  return (
    <section className="address" id='contacts'>
      <h1>Contacts</h1>
      {addressData.map((item, index) => (
        <div className="socialLine" key={index}>
          <span className="addressLabel">
            {item.icon} {item.label}
          </span>
          {index >= 2 ? (
            <a className='socialLink' href={item.link} target='_blank' rel="noreferrer">
              {item.link}
            </a>
          ) : null}
        </div>
      ))}
    </section>
  );
};

export { Address };
