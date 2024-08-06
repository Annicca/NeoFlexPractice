import { FC } from "react";
import "./WaitMessage.scss";
import classNames from "classnames";

type TWaitMessageProps = {
    title: string,
    subtitle: string,
    classNameContainer?: string,
}

export const WaitMessage:FC<TWaitMessageProps> = ({title, subtitle, classNameContainer}) => {
    return(
        <section className={classNames("wait-message", classNameContainer)}>
            <h2 className="wait-message__title">{title}</h2>
            <p className="wait-message__subtitle">{subtitle}</p>
        </section>
    )
}