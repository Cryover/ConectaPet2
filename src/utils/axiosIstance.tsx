const axios = require('axios').default;

const axiosInstance = axios.create({
  baseURL: process.env.API_DEV_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;