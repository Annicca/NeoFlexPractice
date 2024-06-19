import axios, { AxiosError } from "axios";
import { lib } from "shared/lib";
import { TNews } from "shared/types";

const NEWS_API_KEY = "a98d6499fc3340e9909ffdaa7f0296b2";
const NEWS_URL = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${NEWS_API_KEY}`;

const newsInstance = axios.create({
  baseURL: NEWS_URL,
  timeout: 3000,
});

const getNews = async (): Promise<TNews[]> => {
  return newsInstance
    .get("")
    .then((response) => {
      if (response.data.status === "ok") {
        return response.data.articles;
      } else {
        lib.showError(new AxiosError("Произошла ошибка при загрузке новостей"));
      }
    })
    .catch((error) => {
      lib.showError(error);
    });
};

export const newsApi = { getNews };
