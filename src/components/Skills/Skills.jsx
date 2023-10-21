import React from 'react';

const skillsData = [
    {
        "language": "HTML",
        "level": 80
    },
    {
        "language": "CSS",
        "level": 60
    },
    {
        "language": "Js",
        "level": 30
    },
    {
        "language": "С#",
        "level": 20
    },
    {
        "language": "python",
        "level": 40
    }
];

function Skills() {
    return (
        <div className="langInfo">
            <h2>Skills</h2>
            {skillsData.map((lang, index) => {
                return (
                    <div key={index} className="lang">
                        <div className="languageLevel">
                            <span>{lang.language}</span>{" "}
                            <span>{lang.level + "%"}</span>
                        </div>
                        <div
                            className="lines"
                            style={{
                                border: "0.5px solid #ffb400",
                                maxWidth: "100",
                                borderRadius: "25",
                            }}
                        >
                            <div
                                className="percentOfLines"
                                style={{
                                    border: "1px solid #ffb400",
                                    width: lang.level + "%",
                                }}
                            ></div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export {Skills};