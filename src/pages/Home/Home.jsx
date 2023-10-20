import React from "react";
import PhotoBox from "../../components/PhotoBox/PhotoBox";
import Button from "../../components/Button/Button";
import "../../assets/styles/components/global.scss"

export function HomePage () {
    return (
        <div className="container">
        <PhotoBox />
        <Button text="Find out more" className="homeButton"/>
        </div>
        
    )
}