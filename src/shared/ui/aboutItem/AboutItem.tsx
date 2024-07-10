import { TAboutCardItem } from "shared/types";

import "./AboutItem.scss";

export const AboutItem = (aboutItem: TAboutCardItem) => {
    return(
        <div className="about-item">
            {aboutItem.icon}
            <div className="about-item__title">{aboutItem.title}</div>
            <p className="about-item__description">{aboutItem.description}</p>
        </div>
    )
}