import { FC } from "react"
import { StepForm } from "../stepForm";

import "./TitleForm.scss";
import classNames from "classnames";

type TTitleForm = {
    title: string,
    step: number,
    classNameContainer?: string
}

export const TitleForm:FC<TTitleForm> = ({title, step, classNameContainer}) => {
    return(
        <div className={classNames("title-form", classNameContainer)}>
            <div className="title-form__title">{title}</div>
            <StepForm currentStep={step} />
        </div>
    )
}