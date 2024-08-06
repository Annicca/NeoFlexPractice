import { FC, useState } from "react";
import { Burger } from "shared/ui";
import { MovingMenu } from "shared/ui/movingMenu/MovingMenu";

import "./BurgerMenu.scss";

export const BurgerMenu:FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((isOpen) => !isOpen);
    document.querySelector(".wrapper")?.classList.toggle("open-menu");
  };

  return (
    <nav className="nav-burger">
      <Burger isOpen={isOpen} toggleMenu={toggleMenu} />
      <MovingMenu isOpen={isOpen} toggleMenu = {toggleMenu} />
    </nav>
  );
};
