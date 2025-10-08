import React, { useState, useEffect } from 'react';
import { getEvents } from '../services/EventsAPI';
import EventCard from '../components/Event';

const Events = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            const data = await getEvents();
            setEvents(data);
        };

        fetchEvents();
    }, []);

    return (
        <div className="events-container">
            <h2>All Events</h2>
            <div className="events-list">
                {events && events.length > 0 ? (
                    events.map((event) => (
                        <EventCard key={event.id} event={event} />
                    ))
                ) : (
                    <p>No events found.</p>
                )}
            </div>
        </div>
    );
};

export default Events;