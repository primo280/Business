import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Remplacez par l'URL de votre backend
});

export const registerUser = async (userData) => {
  return await api.post('/auth/register', userData);
};

export const loginUser = async (credentials) => {
  return await api.post('/auth/login', credentials);
};

export const verifyEmail = async (otp) => {
  return await api.post('/auth/verify-email', { otp });
};

export const makePayment = async (paymentData) => {
  return await api.post('/payment', paymentData);
};

export const getAffiliateData = async () => {
  return await api.get('/affiliate');
};

export const getAdminData = async () => {
  return await api.get('/admin');
};