import { FC } from "react";
import { card1Src, CONDITIONS } from "shared/const";
import { Button, ConditionItem, Image, List } from "shared/ui";

import './InfoCard.scss';

export const InfoCard:FC = () => {
    return (
        <div className = "info-card">
            <div className="info-card__inner">
                <h1 className="info-card__title">Platinum digital credit card</h1>
                <p className="info-card__description">Our best credit card. Suitable for everyday spending and shopping.
                Cash withdrawals and transfers without commission and interest.</p>
                <List 
                    className="info-card__conditions"
                    items={CONDITIONS}
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