import { FC } from "react";
import { Link } from "react-router-dom";
import { TNews } from "shared/types";
import { Image } from "../image";

import "./NewsItem.scss";

type TNewsItemProps = {
  news: TNews;
};

export const NewsItem: FC<TNewsItemProps> = ({ news }) => {
  return (
    <div className="news-item">
      <Link to={news.url} target="_blank" className="news-item__link" />
      <Image
        className="news-item__img"
        src={news?.urlToImage || ""}
        alt={news.title || "news"}
      />
      <div className="news-item__title">{news.title || "not title"}</div>
      <div className="news-item__description">
        {news.description || "not description"}
      </div>
    </div>
  );
};
