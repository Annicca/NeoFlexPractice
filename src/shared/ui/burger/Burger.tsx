import { FC } from "react";
import classNames from "classnames";
import { Button } from "../button";
import "./Burger.scss";

type TBurger = {
  isOpen: boolean;
  toggleMenu: () => void;
};

export const Burger: FC<TBurger> = ({ isOpen, toggleMenu }) => {
  return (
    <Button
      mode="clear"
      className={classNames("burger", { ["burger_open"]: isOpen })}
      onClick={toggleMenu}
    >
      <span className="burger__item"></span>
      <span className="burger__item"></span>
      <span className="burger__item"></span>
    </Button>
  );
};
