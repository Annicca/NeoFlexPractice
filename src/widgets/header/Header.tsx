import { FC } from "react";
import { NavLink } from "react-router-dom";
import { Button, List, ListItem, LogoBank } from "shared/ui";
import { HEADER_LINKS } from "shared/const";
import { TLink } from "shared/types";
import { BurgerMenu } from "features";

import "./Header.scss";


export const Header: FC = () => {
  return (
    <header className="header">
      <LogoBank />
      <nav className="nav">
        <List
          className="nav__list"
          items={HEADER_LINKS}
          renderItem={(item: TLink) => (
            <ListItem className="nav__item" key={item.label}>
              <NavLink to={item.href} className={({ isActive }) =>
                isActive ? "nav__link_active" : "nav__link"}
              >
                {item.label}
              </NavLink>
            </ListItem>
          )}
        />
      </nav>
      <div className="header__menu">
        <Button>Online Bank</Button>
        <BurgerMenu />
      </div>
    </header>
  );
};
