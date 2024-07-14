import axios from "axios";
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
    return instance.post("/email", { email: email })
       .then(response => {
            if(response.status === 200) {
                localStorage.setItem("email", email);
            }
       })
       .catch(error => lib.showError(error));
}

/**
 * отправка формы prescoring
 * @param data - данные формы
 */
const apllicatioPrescoring = async (data: TPrescoring) => {

    instance.post("/application", data)
    .then(response => {
        if(response.status === 200) {
            console.log(response.data);
        }
    }).catch(error => {throw new Error(error)});
}

export const api = {emailSubscribe, apllicatioPrescoring}