import { FC } from "react";
import { TTab } from "shared/types";
import { lib } from "shared/lib";

export const Tab:FC<TTab> = ({ label, children }) => {
    const clearLabel = lib.removeWhiteSpace(label);
    return(
        <div
            className="tab"
            aria-labelledby={`tab-${clearLabel}`}
            id={`panel-${clearLabel}`}
        >
            {children}
        </div>
    );
}