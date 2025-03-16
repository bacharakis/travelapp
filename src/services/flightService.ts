import axios from 'axios';

const API_URL = 'https://api.example.com/flights'; // Replace with the actual API endpoint

export const getFlightStatus = async (flightDate: string, flightNumber: string) => {
    try {
        const response = await axios.get(`${API_URL}?date=${flightDate}&number=${flightNumber}`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching flight status: ' + error.message);
    }
};
