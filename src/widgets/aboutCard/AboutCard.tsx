import { FC } from "react";
import { ABOUT_CARD_ITEMS } from "shared/const";
import { List, ListItem } from "shared/ui";

import "./AboutCard.scss";

export const AboutCard:FC = () => {
    return(
        <List 
            className="about"
            items = {ABOUT_CARD_ITEMS}
            renderItem={(item) => 
                <ListItem className="about__item" key = {item.title}>
                    {item.icon}
                    <div className="about__title">{item.title}</div>
                    <p className="about__description">{item.description}</p>
                </ListItem>
            }
        />
    )
}