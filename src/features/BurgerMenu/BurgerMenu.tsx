import { useState } from "react";
import { Burger } from "shared/ui";
import { MovingMenu } from "shared/ui/movingMenu/MovingMenu";

import "./BurgerMenu.scss";

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((isOpen) => !isOpen);
  };
  return (
    <nav className="nav-burger">
      <Burger isOpen={isOpen} toggleMenu={toggleMenu} />
      <MovingMenu isOpen={isOpen} />
    </nav>
  );
};
