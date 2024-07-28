import { FC } from "react";
import { ChooseOffer, StepFirstPrescoring } from "features";
import { EStatusApplication } from "shared/const";
import { useCheckApplicationStatus, useStatusApplication } from "shared/lib";
import { ContinueRegistration } from "widgets/continueRegistration";

import "./FormPrescoring.scss";


export const FormPrescoring:FC = () => {
    const statusApplcation = useStatusApplication();
    useCheckApplicationStatus();
    return(
        <div id = "form">
            {!statusApplcation ? 
                <StepFirstPrescoring /> :
                statusApplcation === EStatusApplication.PREAPPROVAL ? <ChooseOffer /> :
                <ContinueRegistration />
            }
        </div>
    )
}