import { FC, useEffect, useRef, useState } from "react";
import { useNews } from "shared/lib/hooks/useNews";
import { lib } from "shared/lib";
import { TNews } from "shared/types";
import { ArrowSliderIcon, Button, List, ListItem } from "shared/ui";
import { NewsItem } from "shared/ui/newsItem/NewsItem";

import "./ListNews.scss";

export const ListNews: FC = () => {
  const news = useNews();
  const sliderRef = useRef(null);
  const prevBtnRef = useRef(null);
  const nextBtnRef = useRef(null);
  const [step, setStep] = useState(0);

  const handleStepSlider = () => {
    const sliderStep = lib.getStep(sliderRef.current, news.length);
    if (sliderStep) {
      setStep(sliderStep);
    }
  };

  useEffect(handleStepSlider, []);

  if (!news) {
    return (
      <div className="news-loading">
        Sorry, an error occurred while downloading the news
      </div>
    );
  }
  if (news.length === 0) return <div className="news-loading">Loading...</div>;
  return (
    <div className="news-slider">
      <List
        className="news-slider__list"
        ref={sliderRef}
        onScroll={() =>
          lib.onScroll(
            sliderRef.current,
            prevBtnRef.current,
            nextBtnRef.current,
            step
          )
        }
        items={news}
        renderItem={(item: TNews) => (
          <ListItem key={item.title}>
            <NewsItem news={item} />
          </ListItem>
        )}
      />
      <div className="news-slider__buttons">
        <Button
          mode="clear"
          className="news-slider__button news-slider__button_prev news-slider__button_disabled"
          ref={prevBtnRef}
          onClick={() => lib.prevScroll(sliderRef.current, step)}
        >
          <ArrowSliderIcon className="news-slider__btn-icon" />
        </Button>
        <Button
          className="news-slider__button news-slider__button_next"
          ref={nextBtnRef}
          onClick={() => lib.nextScroll(sliderRef.current, step)}
        >
          <ArrowSliderIcon className="news-slider__btn-icon" />
        </Button>
      </div>
    </div>
  );
};
