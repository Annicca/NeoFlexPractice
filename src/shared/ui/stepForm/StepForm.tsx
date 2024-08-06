import { FC } from "react"
import "./StepForm.scss";

type TStepForm = {
    currentStep: number,
    countStep?: number,
}

export const StepForm:FC<TStepForm> = ({currentStep, countStep = 5}) => {
    return (
        <div className="step-container">
            {`Step ${currentStep} of ${countStep}`}
        </div>
    )
}