import { FC } from "react";
import { ArrowIcon } from "../icons";
import classNames from "classnames";

import "./Accordion.scss";

type TAccordion = {
    summary: string,
    content: string,
    classNameSummary?: string,
    classNameDetails?: string,
    classNameContent?: string,
}

export const Accordion:FC<TAccordion> = ({summary, content, classNameContent, classNameSummary, classNameDetails}) => {
    return(
        <details className={classNames("details", classNameDetails)}>
            <summary className={classNames("details__summary", classNameSummary)}>{summary} <ArrowIcon className="details__arrow"/></summary>
            <p className={classNames("details__content", classNameContent)}>{content}</p>
        </details>
    )
}