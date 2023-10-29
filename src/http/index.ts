import axios from "axios";
import type { AxiosInstance, AxiosResponse, AxiosError } from "axios";

const api: AxiosInstance = axios.create({
    baseURL: 'http://localhost:8080',
});

api.interceptors.response.use(
    (response: AxiosResponse) => {
        return response;
    },
    (error: AxiosError) => {
        if (error.response) {
            if (error.response.status === 401) {
                console.log("Usuário não autenticado!");
            } else {
                console.log("Ocorreu um erro tente mais tarde!")
            }
        } else if (error.request) {
            console.log("ocorreu um erro durante a request!")
        } else {
            console.log("Não foi possivel executar request!")
        }
        return Promise.reject(error)
    }
);

export default api;