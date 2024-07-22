import { FC } from "react";
import { Outlet } from "react-router";
import { Header, Footer } from "../../widgets";
import classNames from "classnames";

import "./index.scss";

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
