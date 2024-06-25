import { AxiosError } from "axios";
import { REMOVED_DESCRIPTION } from "shared/const";

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
};
export * from "./hooks";
