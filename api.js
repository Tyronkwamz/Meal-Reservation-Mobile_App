import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

// Function to handle API requests with error handling
const handleRequest = async (request, headers = {}) => {
  try {
    const response = await request({ headers });
    return response.data; // Return only the data part of the response
  } catch (error) {
    let errorMessage = 'An unexpected error occurred.';

    if (error.response) {
      console.error('Error response:', error.response.data);
      console.error('Status code:', error.response.status);
      errorMessage = error.response.data.message || 'An error occurred while processing your request.';
    } else if (error.request) {
      console.error('No response received:', error.request);
      errorMessage = 'No response received from the server. Please check your network connection.';
    } else {
      console.error('Error:', error.message);
      errorMessage = 'An error occurred while making the request.';
    }

    throw new Error(errorMessage);
  }
};
// User authentication functions
const login = async (userData) => axios.post(`${API_URL}/login`, userData);
export default login;

export const register = async (userData) => {
  return await handleRequest(() => axios.post(`${API_URL}/register`, userData));
};

// Meal functions
export const fetchMeals = async () => {
  return await handleRequest(() => axios.get(`${API_URL}/meals`));
};

export const addMeal = async (mealData) => {
  return await handleRequest(() => axios.post(`${API_URL}/meals`, mealData));
};

export const deleteMeal = async (mealId) => {
  return await handleRequest(() => axios.delete(`${API_URL}/meals/${mealId}`));
};

// Booking function
export const bookMeal = async (bookingData) => {
  return await handleRequest(() => axios.post(`${API_URL}/book`, bookingData));
};
/*
// Additional functions can be added here as needed
export const fetchUserProfile = async (userEmail) => {
  return await handleRequest(() => axios.get(`${API_URL}/user/profile`, userEmail));
};

export const fetchBusinessReservations = async (token) => {
  return await handleRequest(() => axios.get(`${API_URL}/business/reservations`));
};

export const searchReservations = async (filters, token) => {
  return await handleRequest(() => axios.post(`${API_URL}/search`, filters));
};

export const getBookings = async (token) => {
  return await handleRequest(() => axios.get(`${API_URL}/bookings`));
};

*/