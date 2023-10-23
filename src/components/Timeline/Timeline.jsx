import React from 'react';
import { TimelineData } from './TimelineData';
import "../../assets/styles/components/global.scss"

const Timeline = () => (
  <div className="timeline">
    <h1>Timeline</h1>
    <div className='timelineContainer'>
        {TimelineData.map((event, index) => (
              <div key={index} className="timelineWrapper">
                <div className="timelineDate">
                  <div className="eventDate">{event.date}</div>
                  <span className="verticalLine"></span>
                </div>
                
                <div className="timelineContent">
                  <h2 className="eventTitle">{event.title}</h2>
                  <p className="eventText">{event.text}</p>
                </div>
              </div>
            ))}
    </div>
    
  </div>
);

export { Timeline };

  
  
  
