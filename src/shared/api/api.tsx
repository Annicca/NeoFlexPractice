import axios, { AxiosError } from "axios";
import { lib } from "shared/lib";
import { TPrescoring } from "shared/types";

const BASE_URL = "http://localhost:8080"

const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json'
    }
});

/**
 * подписка на новоости
 * @param email - эл.почта
 * @returns 
 */
const emailSubscribe = async (email: string) => {
    try {
        const response  = await instance.post("/email", { email: email });
        if(response.status === 200) {
            localStorage.setItem("email", email);
        }
    } catch(error) {
        lib.showError(error as AxiosError)
    }
}

/**
 * отправка формы prescoring
 * @param data - данные формы
 */
const apllicatioPrescoring = async (data: TPrescoring) => {
    try {
        const response = await instance.post("/application", data)
        if(response.status === 200) {
            console.log(response.data);
        }
    } catch (error) {
        lib.showError(error as AxiosError)
        throw error;
    }
}

export const api = {emailSubscribe, apllicatioPrescoring}