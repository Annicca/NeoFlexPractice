import { FC } from "react";
import { StepFirstPrescoring } from "features";

import "./FormPrescoring.scss";

export const FormPrescoring:FC = () => {
    return(
        <div id = "form">
            <StepFirstPrescoring />
        </div>
    )
}