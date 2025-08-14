import axios from "axios"
import { useAuthStore } from "../store/auth"


const api = axios.create({
    baseURL: 'https://hml.conect.atenaagencia.com/conecton-back/public/api',
    headers: {
        "Content-Type": "application/json",
    }
  });

api.interceptors.request.use(
    (config) => {
        // Adicionando token de autenticação (se existir)
        const token = useAuthStore().token;
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api