
import { FC, forwardRef, InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";
import classNames from "classnames";
import { Label } from "../label";
import { ErrorIcon, SuccessIcon } from "../icons";

import "./Input.scss";

type TInputProps = InputHTMLAttributes<HTMLInputElement> & {
    label?: string,
    error?: FieldError | undefined,
    classNameContainer?: string;
    isRequired?: boolean;
    isDirty?: boolean;
}

export const Input:FC<TInputProps> = forwardRef<HTMLInputElement, TInputProps>((props, ref)  => {
    const {label, error, isRequired, isDirty, classNameContainer, ...inputProps} = props;
    return(
        <div className={classNames("input-container", classNameContainer)}>
            <Label htmlFor={props.name} isRequired = {isRequired}>{label}</Label>
            <input
                className={classNames("input-container__input", props.className, {
                    "error": !!error,
                })} 
                ref={ref}
                {...inputProps} 
            />
            {isDirty && !error && <SuccessIcon className="input-container__state"/>}
            {error && <ErrorIcon className="input-container__state"/>}
            {error && <div className='error-text'>{error?.message}</div>}
        </div>
    )
})