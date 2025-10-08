// A simple function to format time, assuming time is in "HH:MM" format
const formatTime = (time) => {
    if (!time) return "Time not available";
    const [hour, minute] = time.split(':');
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const formattedHour = hour % 12 || 12; // Convert 0 to 12
    return `${formattedHour}:${minute} ${ampm}`;
};

// A placeholder for calculating remaining time
const formatRemainingTime = (dateString) => {
    if (!dateString) return "Date not available";
    const eventDate = new Date(dateString);
    const now = new Date();
    const diff = eventDate - now;

    if (diff < 0) {
        return "This event has passed.";
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    return `${days} day(s) remaining`;
};

// A placeholder function for formatting negative time
const formatNegativeTimeRemaining = (remaining, eventId) => {
    // This function can be expanded later to change styles of past events
    // For now, it doesn't need to do anything
};

export default {
    formatTime,
    formatRemainingTime,
    formatNegativeTimeRemaining
};