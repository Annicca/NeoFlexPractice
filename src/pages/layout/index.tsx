import { FC } from "react";
import { Outlet } from "react-router";
import { Header, Footer } from "../../widgets";

import "./index.scss";
import classNames from "classnames";

export const Layout: FC = () => {
  return (
    <div className="wrapper">
      <div className={classNames("content", "main-content")}>
        <Header />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
