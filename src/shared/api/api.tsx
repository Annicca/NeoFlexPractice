import axios from "axios";
import { lib } from "shared/lib";

const BASE_URL = "http://localhost:8080"

const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 3000,
});

/**
 * подписка на нвоости
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

export const api = {emailSubscribe}