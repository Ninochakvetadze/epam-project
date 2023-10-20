import React from "react";
import "../../assets/styles/components/global.scss"


export default function PhotoBox() {
    const photoBoxData = [
        {
            userImage: 'https://raw.githubusercontent.com/Ninochakvetadze/images/main/IMG_2953.JPG',
            userName: 'Nino Chakvetadze',
            description: 'Junior Front-end Developer'
        }
    ];
    return (
        <>
            {photoBoxData.map((photoBox, index) => (
                <div className="photoBoxWrapepr" key={index}>
                    <div className="circlePhoto">
                        <img src={photoBox.userImage} alt="User" className="userImage"/>
                    </div>
                    <h1 className="userName">{photoBox.userName}</h1>
                    <p className="description">{photoBox.description}</p>
                </div>
            ))}
        </>
    )
}
