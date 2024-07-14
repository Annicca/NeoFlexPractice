import { FC } from "react"
import { StepForm } from "../stepForm";

import "./TitleForm.scss";

type TTitleForm = {
    title: string,
    step: number
}

export const TitleForm:FC<TTitleForm> = ({title, step}) => {
    return(
        <div className="title-form">
            <div className="title-form__title">{title}</div>
            <StepForm currentStep={step} />
        </div>
    )
}