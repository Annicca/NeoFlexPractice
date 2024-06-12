import { FC } from "react";
import { Outlet } from "react-router";
import { Header } from "./ui";

import "./index.scss";

export const Layout: FC = () => {
  return (
    <div className="wrapper">
      <div className="content">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
      {/* <Footer /> */}
    </div>
  );
};
