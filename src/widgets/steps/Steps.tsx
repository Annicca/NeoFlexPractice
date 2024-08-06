import { List, ListItem, Step } from "shared/ui";
import { STEPS } from "shared/const";

import "./Steps.scss";

export const Steps = () => {
    return(
        <section className="steps">
            <h2 className="steps__title">How to get a card</h2>
            <List 
                className="steps__list"
                items={STEPS}
                renderItem={(step, index) => <ListItem  key={step} className="steps__item"><Step nameStep={step} numberStep={index + 1}/></ListItem>}
            />
        </section>
    )
}