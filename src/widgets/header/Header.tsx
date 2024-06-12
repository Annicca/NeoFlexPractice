import { FC } from "react";
import { Link } from "react-router-dom";
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
              <Link to={item.href} className="nav__link">
                {item.label}
              </Link>
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
