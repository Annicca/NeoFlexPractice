import { FC } from "react";
import { ListNews } from "features";

import "./News.scss";

export const News: FC = () => {
  return (
    <section className="news">
      <h2 className="title-h2">Current news from the world of finance</h2>
      <div className="news__subtitle">
        We update the news feed every 15 minutes. You can learn more by clicking
        on the news you are interested in.
      </div>
      <ListNews />
    </section>
  );
};
