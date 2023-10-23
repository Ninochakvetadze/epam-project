import React from "react";
import { Link } from "react-router-dom";
import PhotoBox from "../../components/PhotoBox/PhotoBox";
import Button from "../../components/Button/Button";
import "../../assets/styles/components/global.scss";

export default function Home() {
  return (
    <div className="container">
      <PhotoBox />
      <Link to="/inner" className="linkToInner">
        <Button text="Find out more" className="homeButton" />
      </Link>
    </div>
  );
}
