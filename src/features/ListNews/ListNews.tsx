import { FC, useEffect } from "react";
import { useNews } from "shared/lib/hooks/useNews";
import { lib } from "shared/lib";
import { TNews } from "shared/types";
import { ArrowSliderIcon, Button, List, ListItem } from "shared/ui";
import { NewsItem } from "shared/ui/newsItem/NewsItem";

import "./ListNews.scss";

export const ListNews: FC = () => {
  const news = useNews();
  useEffect(() => {
    lib.sliderGo();
  }, []);
  if (news === undefined || news === null) {
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
        id="js-slider"
        items={news}
        renderItem={(item: TNews) => (
          <ListItem key={item.title} id="js-slide">
            <NewsItem news={item} />
          </ListItem>
        )}
      />
      <div className="news-slider__buttons">
        <Button
          mode="clear"
          className="news-slider__button news-slider__button_prev news-slider__button_disabled"
          id="js-prev"
        >
          <ArrowSliderIcon className="news-slider__btn-icon" />
        </Button>
        <Button
          className="news-slider__button news-slider__button_next"
          id="js-next"
        >
          <ArrowSliderIcon className="news-slider__btn-icon" />
        </Button>
      </div>
    </div>
  );
};
