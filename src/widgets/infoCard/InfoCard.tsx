import { FC } from "react";
import { card1Src } from "shared/const";
import { Button, ConditionItem, Image, List } from "shared/ui";

import './InfoCard.scss';

export const InfoCard:FC = () => {
    const conditions = [
        {title: "Up to 160 days", description: "No percent", toolTip: "When repaying the fulldebt up to 160 days."},
        {title: "Up to 600 000 ₽", description: "Credit limit", toolTip:"Over the limit willaccrue percent"},
        {title: "0 ₽", description: "Card service is free", toolTip: "Promotion valid until December 31, 2022."},
    ];
    return (
        <div className = "info-card">
            <div className="info-card__inner">
                <h1 className="info-card__title">Platinum digital credit card</h1>
                <p className="info-card__description">Our best credit card. Suitable for everyday spending and shopping.
                Cash withdrawals and transfers without commission and interest.</p>
                <List 
                    className="info-card__conditions"
                    items={conditions}
                    renderItem={(item) => <ConditionItem key={item.title} {...item} />}
                />
                <Button className="info-card__btn">
                    Apply for card
                </Button>
            </div>
            <Image 
                src={card1Src} 
                className="info-card__image" 
                alt="credit card"
            />
        </div>
    );
}