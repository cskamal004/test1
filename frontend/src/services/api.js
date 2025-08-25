import axios from 'axios';

const API_URL = 'http://localhost:8080/api/properties';

export const fetchProperties = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching properties:', error);
        throw error;
    }
};