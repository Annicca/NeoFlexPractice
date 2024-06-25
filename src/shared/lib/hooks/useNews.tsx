import { useEffect, useMemo, useState } from "react";
import { newsApi } from "shared/api/newsApi";
import { TNews } from "shared/types";
import { lib } from "..";
import { LIMIT_REQUESTS } from "shared/const";

export const useNews = () => {
  const [news, setNews] = useState<TNews[]>([]);
  const [numberRequest, setNumberRequest] = useState(0);

  const filterNews = useMemo(() => {
    return news.filter((item) => {
      return (
        lib.getIsValidImgUrl(item.urlToImage) &&
        lib.getIsNotRemovedDescription(item.description) &&
        lib.getIsNotHTML(item.description)
      );
    });
  }, [news]);

  if (numberRequest === LIMIT_REQUESTS) return filterNews;
  useEffect(() => {
    setNumberRequest((numberRequest) => numberRequest + 1);
    newsApi.getNews().then((news) => {
      if (news) {
        setNews(news);
      }
    });
  }, []);

  return filterNews;
};
