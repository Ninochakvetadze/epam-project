import React from "react";

const Feedback = ({ data }) => {
    return (
        <div className="feedbackList" id="feedback">
            <h1 className="feedbackTitle">Feedbacks</h1>
            {data.map((feedback, index) => (
                <div key={index} className="feedbackText">
                    <p className="feedbackDescription">{feedback.description}</p>
                    <div className="userWrapper">
                        <img src={feedback.userImage} alt="User" />
                        <p className="userInfo">{feedback.userInfo}</p>
                        <a className="userURL" href={feedback.userURL} target="_blank" rel="noopener noreferrer">facebook.com</a>
                    </div>
                    
                </div>
            ))}
        </div>
    )
}

export {Feedback};