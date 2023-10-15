import React from "react";

export default function PhotoBox() {
    const navPanelData = [
        {
            userImage: 'https://raw.githubusercontent.com/Ninochakvetadze/img/main/Profile.jpg',
            userName: 'Nino Chakvetadze'
        }
    ];
    return (
        <>
            {navPanelData.map((navPanel, index) => (
                <div className="photoBoxWrapepr" key={index}>
                    <img src={navPanel.userImage} alt="User" />
                    <p className="userName">{navPanel.userName}</p>
                </div>
            ))}
        </>
    )
}
