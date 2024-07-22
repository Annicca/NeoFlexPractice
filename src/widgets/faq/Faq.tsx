import { Accordion, List, ListItem } from "shared/ui";
import { FAQ_ISSUING_RESIVING } from "shared/const";
import { TFaq } from "shared/types";

import "./Faq.scss";

export const Faq = () => {
    return(
        <section className="faq">
            <article className="faq__content">
                <div className="faq__title">Issuing and receiving a card</div>
                <List 
                    items={FAQ_ISSUING_RESIVING}
                    renderItem={(item: TFaq) => 
                        <ListItem key={item.question} className="faq__item">
                            <Accordion 
                                summary={item.question} 
                                content={item.answer} 
                                classNameDetails="question"
                                classNameSummary="question__name"
                                classNameContent="question__content"
                            />
                        </ListItem>

                    }
                />
            </article>
            <article className="faq__content">
                <div className="faq__title">Using a credit card</div>
                <List 
                    items={FAQ_ISSUING_RESIVING}
                    renderItem={(item: TFaq) => 
                        <ListItem key={item.question} className="faq__item">
                            <Accordion 
                                summary={item.question} 
                                content={item.answer} 
                                classNameDetails="question"
                                classNameSummary="question__name"
                                classNameContent="question__content"
                            />
                        </ListItem>

                    }
                />
            </article>
        </section>
        
    )
}