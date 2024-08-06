import { FC, PropsWithChildren, useState } from "react";
import classNames from "classnames";

import "./Tooltip.scss";

type TTooltip = {
    text: string;
    classNameTooltip: string;
    classNameContainer: string;
}

export const Tooltip: FC<PropsWithChildren<TTooltip>> = ({children, text, classNameTooltip, classNameContainer}) => {
    const [showToolTip, setShowToolTip] = useState(false);

    const onMouseEnterHandler = () => {
      setShowToolTip(true);
    };
  
    const onMouseLeaveHandler = () => {
      setShowToolTip(false);
    };
  
    return (
      <div className={classNames("tooltip-container", classNameContainer)} onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler}>
        {children}
        <div className={classNames("tooltip-container__content",{"tooltip-container__content_open" : showToolTip}, classNameTooltip)}>{text}</div>
      </div>
    );
}