import React from "react";
import photoBoxData from "./PhotoBoxData";

export default function PhotoBox() {
  return (
    <>
      {photoBoxData.map((photoBox, index) => (
        <div className="photoBoxWrapepr" key={index}>
          <div className="circlePhoto">
            <img src={photoBox.userImage} alt="User" className="userImage" />
          </div>
          <h1 className="userName">{photoBox.userName}</h1>
          <p className="description">{photoBox.description}</p>
        </div>
      ))}
    </>
  );
}
