import { FC, OptionHTMLAttributes } from "react"

export const Option:FC<OptionHTMLAttributes<HTMLOptionElement>> = (props) => {
    return(
        <option {...props}>{props.children}</option>
    )
}