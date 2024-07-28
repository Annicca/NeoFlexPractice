import {ForwardedRef, forwardRef, SelectHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";
import { Label } from "../label"
import { Option } from "../option";
import { TOption } from "shared/types";
import classNames from "classnames";

type TSelectProps<T extends string | number | readonly string[] | undefined> = SelectHTMLAttributes<HTMLSelectElement> & {
    label?: string,
    error?: FieldError | undefined,
    classNameContainer?: string;
    options: TOption<T>[],
    isRequired?: boolean,
}

const SelectInner = <T extends string | number | readonly string[] | undefined,>(
    props: TSelectProps<T>,
    ref: ForwardedRef<HTMLSelectElement>
) => {
    const {label, error, isRequired, classNameContainer, ...selectProps} = props;
    return(
        <div className={classNames("input-container", classNameContainer)}>
            <Label htmlFor={props.name} isRequired = {isRequired}>{label}</Label>
            <select className={ classNames("input-container__input", props.className, {
                    "error": error,
                })} 
                ref={ref}
                defaultValue={props.defaultValue || ""}
                {...selectProps}
            >
                <Option key = "default" value="" hidden disabled></Option>
                {props.options.map((option) => (
                    <Option key={String(option.value)} value={option.value}>{option.label}</Option>
                ))}

            </select>
            {error && <div className='error-text'>{error?.message}</div>}
        </div>
        
    )
}

export const Select = forwardRef(SelectInner) as <T extends string | number | readonly string[] | undefined>(
    props: TSelectProps<T> & { ref?: ForwardedRef<HTMLSelectElement> }
) => ReturnType<typeof SelectInner>;