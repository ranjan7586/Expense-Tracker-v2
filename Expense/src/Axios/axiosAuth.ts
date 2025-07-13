import axios from "axios";

const axiosAuth = axios.create(
    {
        baseURL: import.meta.env.VITE_API_URL,
        headers: {
            'Content-Type': 'application/json'
        }
    }
)

axiosAuth.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)

export default axiosAuth