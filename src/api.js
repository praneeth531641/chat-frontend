import axios from 'axios';

const API_URL = 'http://127.0.0.1:5000/api'; // Adjust this based on your Flask app

export const getMessages = async() => {
    const response = await axios.get(`${API_URL}/messages`); // Ensure this matches your backend endpoint
    return response.data;
};

export const sendMessage = async(user, message) => {
    const response = await axios.post(`${API_URL}/messages`, { user, message });
    return response.data;
};