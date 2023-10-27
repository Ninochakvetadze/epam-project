import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

function BackToTopButton() {
    const [showBackToTop, setShowBackToTop] = useState(false);
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };
  
    return (
      <><button className="backToTop" onClick={scrollToTop} style={{ display: showBackToTop ? 'block' : 'none' }}>
            <FontAwesomeIcon icon={faChevronUp} />
        </button>
        <style>
                {`
       .backToTop {
        
         position: fixed;
         bottom: 20px;
         right: 20px;
         display: ${showBackToTop ? 'block' : 'none'};
         padding: 5px 10px;
         background-color: #26c07d;
         color: #fff;
         border: none;
         border-radius: 5px;
         cursor: pointer;
       }
       
       .backToTop:hover {
         background-color: #667081;
       }
     `}
    </style></>
  );
}

export {BackToTopButton};
