import { AxiosError } from "axios";

const showError = (error: AxiosError) => {
  // можно заменить на нормальную обработку ошибок
  if (error.response) {
    console.log(error.response.status, error.response.data);
  } else if (error.request) {
    console.log(error.request);
  } else {
    console.log(error.message);
  }
  console.log(error.config);
};

const getCurrentDate = () => {
  return new Date().toLocaleString().split(",")[0];
};

export const lib = { showError, getCurrentDate };
export * from "./hooks";
