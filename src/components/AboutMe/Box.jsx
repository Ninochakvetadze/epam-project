import React from 'react';

const Box = ({ title, content }) => {
  return (
    <div className="boxWrapper">
      <h2 className="userTitle">{title}</h2>
      <p className="userContent">{content}</p>
    </div>
  );
};

export default Box


