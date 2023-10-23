import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Button(props) {
  const { icon, text, onClick, className } = props;

  return (
    <button className={`button ${className}`} onClick={onClick}>
      {icon && <FontAwesomeIcon icon={icon} className="buttonIcon" />}
      {text && <span className="buttonText">{text}</span>}
    </button>
  );
}

export default Button;
