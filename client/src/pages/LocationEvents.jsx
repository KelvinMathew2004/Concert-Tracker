import React, { useState, useEffect } from 'react';
import Event from '../components/Event';
import LocationsAPI from '../services/LocationsAPI'; // 👈 Import LocationsAPI
import { getEventsByLocation } from '../services/EventsAPI'; // 👈 Import EventsAPI
import '../css/LocationEvents.css';

const LocationEvents = ({ index }) => {
    const [location, setLocation] = useState(null); // 👈 Initialize as null
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchLocationAndEvents = async () => {
            try {
                // Fetch location details
                const locationData = await LocationsAPI.getLocationById(index);
                setLocation(locationData);

                // Fetch events for that location
                const eventsData = await getEventsByLocation(index);
                setEvents(eventsData);
            } catch (error) {
                console.error("Error fetching location or events:", error);
            }
        };

        fetchLocationAndEvents();
    }, [index]); // 👈 Add index as a dependency

    if (!location) {
        return <div>Loading...</div>; // 👈 Add a loading state
    }

    return (
        <div className='location-events'>
            <header>
                <div className='location-image'>
                    {/* The location object from the DB doesn't have an image, address, etc. */}
                    {/* You'll need to add those to your database or remove them from here. */}
                    {/* <img src={location.image} /> */}
                </div>
                <div className='location-info'>
                    <h2>{location.name}</h2>
                    <p>{location.description}</p> {/* 👈 Use description */}
                </div>
            </header>

            <main>
                {events && events.length > 0 ? (
                    events.map((event) => (
                        <Event
                            key={event.id}
                            event={event} // 👈 Pass the whole event object
                        />
                    ))
                ) : (
                    <h2>
                        <i className="fa-regular fa-calendar-xmark fa-shake"></i>{' '}
                        {'No events scheduled at this location yet!'}
                    </h2>
                )}
            </main>
        </div>
    );
};

export default LocationEvents;