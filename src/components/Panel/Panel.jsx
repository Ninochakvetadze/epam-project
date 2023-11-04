import React, { useState } from "react";
import { FiMenu } from 'react-icons/fi'; 
import Navigation from "../Navigation/Navigation";
import Button from '../Button/Button'
import PhotoBox from "../PhotoBox/PhotoBox";
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';import "../../assets/styles/components/global.scss";

function Panel() {
  const [isPanelVisible, setPanelVisibility] = useState(true);

  const togglePanelVisibility = () => {
    setPanelVisibility(!isPanelVisible);
  };

  const panelStyle = {
    transition: '.3s',
    transform: isPanelVisible ? "" : "translateX(-95%)",
  };

  const goBack = () => {
    setPanelVisibility(false);
  };

  return (
    <div style={panelStyle} className="toggleMenu" id="panel" >
      <div className="burger-icon">
        <FiMenu className="burgerIcon" onClick={togglePanelVisibility} />
      </div>
      <div  className="panel">
        <PhotoBox />
        <Navigation />
        <Button icon={faArrowLeft} text="Go back" className="navButton" onClick={goBack}/>
      </div>
    </div>
  );
}


export {Panel};
