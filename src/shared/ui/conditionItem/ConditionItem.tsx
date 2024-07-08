import { FC } from "react";
import './ConditionItem.scss';

type TConditionItem = {
    title: string;
    description: string;
    toolTip: string;
}

export const ConditionItem:FC<TConditionItem> = ({title, description, toolTip}) => {
    return(
        <div className="condition" data-tooltip = {toolTip}>
            <div className="condition__title">{title}</div>
            <div className="condition__description">{description}</div>
        </div>
    )
}