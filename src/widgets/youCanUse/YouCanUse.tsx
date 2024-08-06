import { FC } from "react";
import { List, ListItem, PersonIcon } from "shared/ui";
import { FEATURES } from "shared/const";
import "./YouCanUse.scss";

export const YouCanUse: FC = () => {
  return (
    <section className="you-can-use">
      <PersonIcon className="you-can-use__icon" />
      <div>
        <h2 className="you-can-use__title">
          We Provide Many Features You Can Use
        </h2>
        <div className="you-can-use__subtitle">
          You can explore the features that we provide with fun and have their
          own functions each feature
        </div>
        <List
          className="you-can-use__list"
          items={FEATURES}
          renderItem={(item) => (
            <ListItem key={item} className="you-can-use__item">
              {item}
            </ListItem>
          )}
        />
      </div>
    </section>
  );
};
