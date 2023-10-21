import React, { useState } from "react";
import { FiMenu } from 'react-icons/fi'; 
import Navigation from "../Navigation/Navigation";
import PhotoBox from "../PhotoBox/PhotoBox";
import "../../assets/styles/components/global.scss";

function Panel() {
  const [isPanelVisible, setPanelVisibility] = useState(true);

  const togglePanelVisibility = () => {
    setPanelVisibility(!isPanelVisible);
  };

  const panelStyle = {
    display: isPanelVisible ? "block" : "none",
  };

  const goBack = () => {
    setPanelVisibility(false);
  };

  return (
    <div className="toggleMenu">
        <FiMenu className="burgerIcon" onClick={togglePanelVisibility}/> {/* Burger menu icon */}
      <div style={panelStyle} className="panel">
        <PhotoBox />
        <Navigation />
        <div className="goBackButtonWrapper">
          <button className="goBackButton" onClick={goBack}>
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}


export {Panel};
