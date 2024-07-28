import { AxiosError } from "axios";
import { REMOVED_DESCRIPTION } from "shared/const";
import { TKeyLAbel } from "shared/types";

const getStep = (slider: HTMLElement | null, lengthItems: number) => {
  if (!slider) return;
  return slider.scrollWidth / lengthItems;
};

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

const disabledBtn = (btn: HTMLElement) => {
  !btn.classList.contains("news-slider__button_disabled") &&
    btn.classList.add("news-slider__button_disabled");
};

const enabledBtn = (btn: HTMLElement) => {
  btn.classList.contains("news-slider__button_disabled") &&
    btn.classList.remove("news-slider__button_disabled");
};

const nextScroll = (slider: HTMLElement | null, step: number) => {
  slider?.scrollBy(step, 0);
};

const prevScroll = (slider: HTMLElement | null, step: number) => {
  slider?.scrollBy(-1 * step, 0);
};

const onScroll = (
  slider: HTMLElement | null,
  prevButton: HTMLElement | null,
  nextButton: HTMLElement | null,
  step: number
) => {
  if (slider && prevButton && nextButton) {
    if (slider.scrollLeft === 0) {
      prevButton?.removeEventListener("click", () => prevScroll(slider, step));
      disabledBtn(prevButton);
    } else {
      prevButton?.addEventListener("click", () => prevScroll(slider, step));
      enabledBtn(prevButton);
    }

    if (
      Math.round(slider.scrollLeft) ===
      slider.scrollWidth - slider.clientWidth
    ) {
      nextButton?.removeEventListener("click", () => nextScroll(slider, step));
      disabledBtn(nextButton);
    } else {
      nextButton?.addEventListener("click", () => nextScroll(slider, step));
      enabledBtn(nextButton);
    }
  }
};

/**
 * проверка на валидность url картинки
 * @param url - url картинки
 * @returns boolean
 */
const getIsValidImgUrl = (url: string | null): boolean => {
  if (!url) return true;
  const img = new Image();
  img.src = url;
  return img.complete && img.naturalHeight > 0;
};

/**
 * проверка на удаленное описание
 * @param description - описание
 * @returns boolean
 */
const getIsNotRemovedDescription = (description: string | null): boolean => {
  return description !== REMOVED_DESCRIPTION;
};

/**
 * проверка на HTML разметку
 * @param description - описание
 * @returns boolean
 */
const getIsNotHTML = (description: string | null): boolean => {
  if (!description) return true;
  const HTMLreg: RegExp = /\<[^>]+\>/g;
  return !HTMLreg.test(description);
};

/**
 * проверка подписки на новости
 * @returns boolean
 */

const checkSubscribe = (): boolean => {
  const email = localStorage.getItem("email");
  if(email) {
      return true;
  } else {
      return false;
  }
}

/**
 * замена пробелов на тире
 * @param text - строка
 * @returns строка, где пробелы заменены на тире
 */
const removeWhiteSpace = (text: string) => {
  return text.replace(/\s/g, "-");
}

/**
 * проверка даты на корректность
 * @param dateString - строка даты
 * @returns boolean
 */
const checkCorrectDate = (dateString: string): boolean => {
  const valueWithoutDash = dateString.replace(/[^\d]/g, '');

  if (valueWithoutDash.length === 8) {
    const arrDate = dateString.split("-");
    const newDate = new Date(Number(arrDate[0]), Number(arrDate[1]) - 1, Number(arrDate[2]));

    if ((newDate.getFullYear() != Number(arrDate[0])) || (newDate.getMonth() + 1 != Number(arrDate[1])) || (newDate.getDate() != Number(arrDate[2]))) {
      return false;
    }

    return true;
  }
  return false;
}

/**
 * проверка на 18 летний возраст
 * @param value строка даты
 * @returns boolean или срока ошибки
 */
const validateAge = (value: string): string | boolean  => {
  // const valueWithoutDash = value.replace(/[^\d]/g, '');

  // if (valueWithoutDash.length === 8) {
  //   const arrBirth = value.split("-");
  //   const birth = new Date(Number(arrBirth[0]), Number(arrBirth[1]) - 1, Number(arrBirth[2]));
  //   let today = new Date();

  //   if ((birth.getFullYear() != Number(arrBirth[0])) || (birth.getMonth() + 1 != Number(arrBirth[1])) || (birth.getDate() != Number(arrBirth[2]))) {
  //     return "Incorrect date of birth";
  //   }


    

  //   return true;
  // }

  // return false;

  const isCorrectDate = checkCorrectDate(value);
  if (!isCorrectDate) {
    return "Incorrect date of birth";
  }

  const arrBirth = value.split("-");
  const birth = new Date(Number(arrBirth[0]), Number(arrBirth[1]) - 1, Number(arrBirth[2]));
  let today = new Date();
  const yearsOld18 = new Date();
  yearsOld18.setFullYear(today.getFullYear() - 18)


  if (birth > yearsOld18) {
    return "You must be at least 18 years old"
  }

  return true;
};

/**
 * проверка на то что дата раньше текущей
 * @param dateString - строка даты
 * @param message - сообщение об ошибке
 * @returns boolean или сообщение об ошибке
 */
const isDateEarlier = (dateString: string): boolean => {
  const givenDate = new Date(dateString);
  const currentDate = new Date();

  return givenDate < currentDate;
};

/**
 * вывод сообщения об ошибке если дата больше текущей
 * @param value - строка даты
 * @param message - сообщение об ошибке
 * @returns boolean или сообщение об ошибке
 */
const checkDateMax = (value: string, message: string): boolean | string => {

  const isCorrectDate = checkCorrectDate(value);
  const isEarlier = isDateEarlier(value)
  if (!isCorrectDate || !isEarlier) {
    return message;
  }
  return true;
}

const scrollTo = (id: string) => {
  const element = document.querySelector(id)

  element?.scrollIntoView({
    behavior: "smooth",
    block: "start"
  })
}

const toTitleCase = (value: string) => {
  return value
      .replace(/(^.|[A-Z]+)([^A-Z]?)/g, (match, p1, p2) => `${p1}${p2}`.trim())
}

const keysToArrayOfObjects = <T extends object,>(obj: T): TKeyLAbel<T>[] => {
  const keys = Object.keys(obj)
  return keys.map(key => ({ value: key as keyof T, label: toTitleCase(key)}));
}

export const lib = {
  showError,
  getCurrentDate,
  getStep,
  onScroll,
  prevScroll,
  nextScroll,
  getIsValidImgUrl,
  getIsNotRemovedDescription,
  getIsNotHTML,
  checkSubscribe,
  removeWhiteSpace,
  validateAge,
  checkDateMax,
  scrollTo,
  toTitleCase,
  keysToArrayOfObjects
};
export * from "./hooks";
