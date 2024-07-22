import { FC } from "react";
import { Link } from "react-router-dom";
import { HEADER_LINKS } from "shared/const";
import { List } from "../list";
import { TLink } from "shared/types";
import { ListItem } from "../listItem";
import classNames from "classnames";

import "./MovingMenu.scss";

type TMovingMenu = {
  isOpen: boolean;
  toggleMenu: () => void;
};

export const MovingMenu: FC<TMovingMenu> = ({ isOpen, toggleMenu }) => {
  return (
    <div
      className={classNames("menu-moving", { ["menu-moving_open"]: isOpen })}
    >
      <List
        className="menu-moving__list"
        items={HEADER_LINKS}
        renderItem={(item: TLink) => (
          <ListItem className="menu-moving__item" key={item.label} onClick={toggleMenu}>
            <Link to={item.href} className="menu-moving__link">
              {item.label}
            </Link>
          </ListItem>
        )}
      />
    </div>
  );
};
