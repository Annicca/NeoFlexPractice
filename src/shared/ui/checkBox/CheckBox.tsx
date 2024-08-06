import { FC, forwardRef, InputHTMLAttributes } from "react";
import { Label } from "../label";
import { FieldError } from "react-hook-form";
import classNames from "classnames";

import "./CheckBox.scss";

type TCheckBoxProps = InputHTMLAttributes<HTMLInputElement> & {
    label?: string,
    error?: FieldError | undefined,
    classNameContainer?: string;
    isRequired?: boolean;
}

export const CheckBox:FC<TCheckBoxProps> = forwardRef<HTMLInputElement, TCheckBoxProps>((props, ref) => {
    const {classNameContainer, label, error, isRequired, ...inputProps} = props
    return(
        <div className = "checkbox-wrapper">
            <Label className={classNames("checkbox-container", classNameContainer)}>{label}
                <input type="checkbox" ref={ref} {...inputProps}/>
                <span className="checkbox-mark"></span>
            </Label>
            {error && <div className="error-text">{error.message}</div>}
        </div>
    )
})