import axios from "axios";
import { TCurrency } from "shared/types";
import { CURRENCIES_REQUEST } from "shared/const";
import { lib } from "shared/lib";

const CURRENCY_URL = "https://currency-exchange.p.rapidapi.com/exchange";
const CURRENCY_API_KEY = "b8f5c60439msh082149d3f0f9556p136bd7jsnc65ddf32c2a2";
const CURRENCY_API_HOST = "currency-exchange.p.rapidapi.com";

const currencyInstance = axios.create({
  baseURL: CURRENCY_URL,
  timeout: 3000,
  headers: {
    "X-RapidAPI-Key": CURRENCY_API_KEY,
    "X-RapidAPI-Host": CURRENCY_API_HOST,
  },
});

const getCurrency = async (from: string, to = "RUB", amount = 1.0) => {
  return await currencyInstance
    .get(``, {
      params: {
        from: from,
        to: to,
        q: amount,
      },
    })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      lib.showError(err);
    });
};

const getAllCurrency = async () => {
  return await Promise.allSettled(
    CURRENCIES_REQUEST.map((value) => getCurrency(value))
  ).then((response) => {
    return response;
  });
};

const setAllCurrency = async (): Promise<TCurrency[]> => {
  return await currencyApi.getAllCurrency().then((response) => {
    const respCurrencies = response.map((value, index) => {
      let currency: TCurrency;
      if (value.status === "fulfilled") {
        currency = {
          name: CURRENCIES_REQUEST[index],
          value: Number(value.value),
        };
      } else {
        currency = {
          name: CURRENCIES_REQUEST[index],
          value: null,
        };
      }
      return currency;
    });
    return respCurrencies;
  });
};

export const currencyApi = { getCurrency, getAllCurrency, setAllCurrency };
