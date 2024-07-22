import { FC } from "react";
import { Tooltip } from "../tooltip";
import './ConditionItem.scss';

type TConditionItem = {
    title: string;
    description: string;
    toolTip: string;
}

export const ConditionItem:FC<TConditionItem> = ({title, description, toolTip}) => {
    return(
        <Tooltip text={toolTip} classNameTooltip="condition-tooltip" classNameContainer="condition">
            <>
                <div className="condition__title">{title}</div>
                <div className="condition__description">{description}</div>
            </>
        </Tooltip>
    )
}