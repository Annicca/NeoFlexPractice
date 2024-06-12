import { FC } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { LogoNeoflex } from "shared/ui/icons";
import { List, ListItem } from "shared/ui";
import { FOOTER_LINKS, LINK_NEOFLEX } from "shared/const";
import { TLink } from "shared/types";

import "./Footer.scss";

export const Footer: FC = () => {
  return (
    <footer className="footer">
      <div className={classNames("content", "footer__inner")}>
        <Link to={LINK_NEOFLEX} target="_blank" className="footer__logo">
          <LogoNeoflex />
        </Link>
        <div className="footer__contact">
          <div className="footer__contact-inner">
            <a href="tel:+74959842513" className="footer__tel">
              +7 (495) 984 25 13
            </a>
            <a href="mailto:info@neoflex.ru" className="footer__email">
              info@neoflex.ru
            </a>
          </div>
        </div>
        <List
          className="footer__links"
          items={FOOTER_LINKS}
          renderItem={(item: TLink) => (
            <ListItem className="footer__item" key={item.label}>
              <Link to={item.href} className="footer__link">
                {item.label}
              </Link>
            </ListItem>
          )}
        />
        <div className="footer__cookie">
          We use cookies to personalize our services and improve the user
          experience of our website. Cookies are small files containing
          information about previous visits to a website. If you do not want to
          use cookies, please change your browser settings
        </div>
      </div>
    </footer>
  );
};
