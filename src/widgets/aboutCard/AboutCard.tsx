import { FC } from "react";
import { ABOUT_CARD_ITEMS } from "shared/const";
import { AboutItem, List, ListItem } from "shared/ui";

import "./AboutCard.scss";

export const AboutCard:FC = () => {
    return(
        <List 
            className="about"
            items = {ABOUT_CARD_ITEMS}
            renderItem={(item) => 
                <ListItem key = {item.title} className="about__item">
                    <AboutItem aboutItem={item} />
                </ListItem>
            }
        />
    )
}