import { useEffect, useMemo, useState } from "react";
import { newsApi } from "shared/api/newsApi";
import { TNews } from "shared/types";

export const useNews = () => {
  const [news, setNews] = useState<TNews[]>([]);
  const [numberRequest, setNumberRequest] = useState(0);
  console.log(news);

  const filterNews = useMemo(() => {
    return news.filter((item) => {
      if (!item.urlToImage) return true;
      const img = new Image();
      img.src = item.urlToImage;
      return img.complete && img.naturalHeight > 0;
    });
  }, [news]);

  if (numberRequest === 100) return filterNews;
  useEffect(() => {
    newsApi.getNews().then((news) => {
      if (news) {
        setNews(news);
        setNumberRequest((numberRequest) => numberRequest + 1);
      }
    });
  }, []);

  return filterNews;
};
