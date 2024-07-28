import { FC} from "react"
import { Loader } from "../loader"
import { Button } from "../button"
import classNames from "classnames"

import "./ContinueButton.scss";

type TContinueButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    loading: boolean,
    text?: string,
    mode?: "clear" | "error";
}

export const ContinueButton:FC<TContinueButtonProps> = ({loading = false, text = "Continue", className, ...buttonProps}) => {

    return (
        <>
            {loading ? 
                <Loader />
                :
                <Button className={classNames("continue", className)} {...buttonProps}>{text}</Button>
            }
        </>
    )
}