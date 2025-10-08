const getEvents = async () => {
    try {
        const response = await fetch('/api/events')
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error)
    }
}

const getEventsByLocation = async (location_id) => {
    try {
        const response = await fetch(`/api/events/locations/${location_id}`)
        const data = await response.json()
        return data
    }
    catch (error) {
        console.error(error)
    }
}

// Add this new function
const getEventsById = async (id) => {
    try {
        // Assuming you will create a route like this on your server
        const response = await fetch(`/api/events/${id}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
};


export {
    getEvents,
    getEventsByLocation,
    getEventsById // And export it
}