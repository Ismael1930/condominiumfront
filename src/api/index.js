import axios from 'axios'

const api = axios.create({
    baseURL: 'https://localhost:7287',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
});

export default api