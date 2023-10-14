import React from "react";

const Feedback = ({ data }) => {
    return (
        <div className="feedbackList">
            <h1 className="feedbackTitle">Feedbacks</h1>
            {data.map((feedback, index) => (
                <div key={index} className="feedbackText">
                    <p className="feedbackDescription">{feedback.description}</p>
                    <div className="userWrapper">
                        <img src={feedback.userImage} alt="User" />
                        <p className="userInfo">{feedback.userInfo}</p>
                        <p className="userURL">{feedback.userURL}</p>  
                    </div>
                    
                </div>
            ))}
        </div>
    )
}

export {Feedback};