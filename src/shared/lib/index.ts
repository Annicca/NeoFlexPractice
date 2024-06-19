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

const disabledBtn = (btn: HTMLElement) => {
  !btn.classList.contains("news-slider__button_disabled") &&
    btn.classList.add("news-slider__button_disabled");
};

const enabledBtn = (btn: HTMLElement) => {
  btn.classList.contains("news-slider__button_disabled") &&
    btn.classList.remove("news-slider__button_disabled");
};

const nextScroll = (slider: HTMLElement, step: number) => {
  slider.scrollBy(step, 0);
};

const prevScroll = (slider: HTMLElement, step: number) => {
  slider.scrollBy(-1 * step, 0);
};

const onScroll = (
  slider: HTMLElement,
  prevButton: HTMLElement,
  nextButton: HTMLElement,
  step: number
) => {
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
};

const sliderGo = () => {
  const slider = document.getElementById("js-slider");
  const prevButton = document.getElementById("js-prev");
  const nextButton = document.getElementById("js-next");
  const slides = document.querySelectorAll("#js-slide");

  const isWorking =
    slider !== null &&
    prevButton !== null &&
    nextButton !== null &&
    slides !== null &&
    slides.length > 0;

  if (isWorking) {
    const step = slider.scrollWidth / slides.length;
    prevButton?.addEventListener("click", () => prevScroll(slider, step));

    nextButton?.addEventListener("click", () => nextScroll(slider, step));

    slider.addEventListener("scroll", () =>
      onScroll(slider, prevButton, nextButton, step)
    );
  }
};

export const lib = { showError, getCurrentDate, sliderGo };
export * from "./hooks";
