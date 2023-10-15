import React from 'react';
import { TimelineData } from './TimelineData';

const TimelineEvent = ({ date, title, text }) => (
  <div className="timeline-event">
    <div className="event-date">{date}</div>
    <div className="event-content">
      <h2 className="event-title">{title}</h2>
      <p className="event-text">{text}</p>
    </div>
  </div>
);

const Timeline = () => (
    <div className="timeline">
      {TimelineData.map((event, index) => (
        <TimelineEvent
          key={index}
          date={event.date}
          title={event.title}
          text={event.text}
        />
      ))}
    </div>
  );
  
  export { Timeline };  
  
  
  
  
  
