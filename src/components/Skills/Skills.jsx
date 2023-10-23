import React from 'react';
import "../../assets/styles/components/global.scss"

const skillsData = [
    {
        "language": "HTML",
        "level": 90
    },
    {
        "language": "CSS",
        "level": 80
    },
    {
        "language": "React",
        "level": 70
    },
    {
        "language": "JS",
        "level": 60
    }
];

function Skills() {
    return (
        <div className="langInfo">
            <h2>Skills</h2>
            {skillsData.map((lang, index) => {
                return (
                    <div key={index} className="lang">
                        <div
                            className="lines"
                            style={{
                                border: "10px solid #26C17E",
                                width: lang.level + "%",
                            }}>
                                <span>{lang.language} </span>{" "}

                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export {Skills};