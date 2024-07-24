import axios, { AxiosError } from "axios";
import { lib } from "shared/lib";
import { TApplication, TOffer, TPrescoring } from "shared/types";

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
const apllicatioPrescoring = async (data: TPrescoring): Promise<TOffer[] | null> => {
    try {
        const response = await instance.post("/application", data)
        if(response.status === 200) {
            return response.data
        }
        return null;
    } catch (error) {
        lib.showError(error as AxiosError)
        throw error;
    }
}

/**
 * получение заявки по id
 * @param id - id заявки
 * @returns список офферов
 */

const getApplication = async (id: number): Promise<TApplication | null> => {
    try {
        const response = await instance.get(`/admin/application/${id}`)
        if(response.status === 200) {
            return response.data as TApplication;
        }
        return null;
    } catch (error) {
        lib.showError(error as AxiosError)
        throw error;
    }
}

/**
 * выбрать оффер
 * @param offer - предложение
 * @returns
 */

const chooseOffer = async (offer: TOffer) => {
    try {
        await instance.post(`/application/apply`, offer)
    } catch (error) {
        lib.showError(error as AxiosError)
        throw error;
    }
}

export const api = {
    emailSubscribe, 
    apllicatioPrescoring, 
    getApplication, 
    chooseOffer
}