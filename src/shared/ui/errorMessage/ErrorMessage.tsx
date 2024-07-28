import { FC } from "react";
import "./ErrorMessage.scss";

type TErrorMessageProps = {
    error: string | null
}

export const ErrorMessage:FC<TErrorMessageProps> = ({error}) => {
    return(
        <>
            {error && <div className="error-text error-form">{error}</div>}
        </>
    )
}