import { FC } from "react";
import { CARDS } from "shared/const";
import { Button, List, ListItem, Image } from "shared/ui";

import "./ChooseCards.scss";

export const ChooseCards: FC = () => {
  return (
    <section className="choose-cards">
      <div className="choose-cards__title-container">
        <h1 className="choose-cards__title">
          Choose the design you like and apply for card right now
        </h1>
        <Button>Choose the card</Button>
      </div>
      <List
        className="choose-cards__cards"
        items={CARDS}
        renderItem={(card) => (
          <ListItem key={card}>
            <Image src={card} className="choose-cards__card" />
          </ListItem>
        )}
      />
    </section>
  );
};
