const getAllLocations = async () => {
    try {
        const response = await fetch('/api/locations');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
};

const getLocationById = async (id) => {
    try {
        const response = await fetch(`/api/locations/${id}`);
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.error(error);
    }
};

// Export all functions as a single default object
export default {
    getAllLocations,
    getLocationById
};