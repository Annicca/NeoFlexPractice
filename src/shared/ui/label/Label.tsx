import { FC, LabelHTMLAttributes, PropsWithChildren } from "react"
import classNames from "classnames"

import "./Label.scss";

type TLabelProps = LabelHTMLAttributes<HTMLLabelElement> & {
    isRequired?: boolean | undefined;
}

export const Label:FC<PropsWithChildren<TLabelProps>> = ({isRequired = false, children, className, ...labelProps}) => {
    return(
        <label className={classNames("label", className)} {...labelProps}>
            {children}
            {isRequired ? <span className="error-text">*</span> : ''}
        </label>
    )
}