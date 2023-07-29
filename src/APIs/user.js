import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000';

export const createAccount = async (reqBody) => {
  try {
    const response = await axios.post(`${BASE_URL}/users`, { user: reqBody });
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const getToken = async (reqBody) => {
  try {
    const response = await axios.post(`${BASE_URL}/users/sign_in`, {
      user: reqBody,
    });
    return response.data.token;
  } catch (error) {
    throw new Error(error);
  }
};
