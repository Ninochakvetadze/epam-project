import React, { useState } from 'react';
import { Navigation } from '../Navigation';
import PhotoBox from '../PhotoBox/PhotoBox';

const Panel = () => {
  const [isPanelVisible, setPanelVisibility] = useState(false);

  const togglePanelVisibility = () => {
    setPanelVisibility(!isPanelVisible);
  };

  return (
    <header>
      <button onClick={togglePanelVisibility} className="hamburger-button">
        ☰
      </button>
      {isPanelVisible && (
        <>
          <section>
            <PhotoBox />
          </section>
          <nav role="navigation">
            <Navigation />
          </nav>
          
        </>
        
      )}
      
    </header>
  );
};

export { Panel };
