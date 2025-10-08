import React from 'react';
import '../css/Event.css';
import dates from '../utils/dates';

// Destructure the 'event' object from props
const Event = ({ event }) => {
    
    // Use the event.date property for calculating remaining time
    const remaining = dates.formatRemainingTime(event.date);

    return (
        <article className='event-information'>
            {/* You can add an image URL to your database and display it here */}
            {/* <img src={event.image_url} alt={event.name} /> */}

            <div className='event-information-overlay'>
                <div className='text'>
                    {/* Use properties from the event object */}
                    <h3>{event.name}</h3>
                    <p>
                        <i className="fa-regular fa-calendar fa-bounce"></i> {event.date}
                    </p>
                    <p id={`remaining-${event.id}`}>{remaining}</p>
                </div>
            </div>
        </article>
    );
};

export default Event;