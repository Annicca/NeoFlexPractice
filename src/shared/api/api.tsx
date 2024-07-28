import axios, { AxiosError } from "axios";
import { lib } from "shared/lib";
import { TApplication, TOffer, TPrescoring, TScoring } from "shared/types";

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

/**
 * закончить регистрацию заявки
 * @param applicationId - номер заявки
 */
const finishRegistration = async (applicationId: number, scoringData: TScoring) => {
    try {
        await instance.put(`/application/registration/${applicationId}`, scoringData)
    } catch (error) {
        lib.showError(error as AxiosError)
        throw error;
    }
}

/**
 * подтвердить согласие
 * @param applicationId - номер заявки
 */
const documentAgree = async (applicationId: number) => {
    try {
        await instance.post(`/document/${applicationId}`)
    } catch (error) {
        lib.showError(error as AxiosError)
    }
}

/**
 * отказаться от заявки
 * @param applicationId - номер заявки
 */
const denyApplication = async (applicationId: number) => {
    try {
        await instance.post(`/application/${applicationId}/deny`)
    } catch (error) {
        lib.showError(error as AxiosError)
    }
}

/**
 * подтвердить документы
 * @param applicationId - номер заявки
 */
const signDocument = async (applicationId: number) => {
    try {
        await instance.post(`/document/${applicationId}/sign`)
    } catch (error) {
        lib.showError(error as AxiosError)
    }
}

/**
 * отправка кода подтверждения
 * @param applicationId - номер заявки
 */
const confirmCode = async(applicationId: number, code: string) => {
    try {
        await instance.post(`/document/${applicationId}/sign/code`, code)
    } catch (error) {
        lib.showError(error as AxiosError);
        throw new Error("Invalid confirmation code");
    }
}

export const api = {
    emailSubscribe, 
    apllicatioPrescoring, 
    getApplication, 
    chooseOffer,
    finishRegistration,
    documentAgree,
    denyApplication,
    signDocument,
    confirmCode
}