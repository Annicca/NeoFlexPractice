import { FC, forwardRef, SelectHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";
import { Label } from "../label"
import { Option } from "../option";
import { TOption } from "shared/types";
import classNames from "classnames";

type TSelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
    label?: string,
    error?: FieldError | undefined,
    classNameContainer?: string;
    options: TOption[],
    isRequired?: boolean,
}

export const Select:FC<TSelectProps> = forwardRef<HTMLSelectElement, TSelectProps>((props, ref) => {
    const {label, error, isRequired, classNameContainer, ...selectProps} = props;
    return(
        <div className={classNames("input-container", classNameContainer)}>
            <Label htmlFor={props.name} isRequired = {isRequired}>{label}</Label>
            <select className={ classNames("input-container__input", props.className, {
                    "error": error,
                })} 
                ref={ref}
                {...selectProps}
            >
                {props.options.map((option) => (
                    <Option key={option.value} value={option.value}>{option.label}</Option>
                ))}
      
      </select>
        </div>
        
    )
})