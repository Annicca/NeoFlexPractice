import { FC } from "react";
import { TAboutCardItem } from "shared/types";

import "./AboutItem.scss";

type TAboutItem = {
    aboutItem: TAboutCardItem
}

export const AboutItem:FC<TAboutItem> = ({aboutItem}) => {
    return(
        <div className="about-item">
            {aboutItem.icon}
            <div className="about-item__title">{aboutItem.title}</div>
            <p className="about-item__description">{aboutItem.description}</p>
        </div>
    )
}