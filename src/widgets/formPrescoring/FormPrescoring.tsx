import { FC } from "react";
import { ChooseOffer, StepFirstPrescoring } from "features";
import { EStatusApplication } from "shared/const";
import { useStatusApplication } from "shared/lib";

import "./FormPrescoring.scss";
import { ContinueRegistration } from "widgets/continueRegistration";

export const FormPrescoring:FC = () => {
    const statusApplcation = useStatusApplication();
    return(
        <div id = "form">
            {!statusApplcation && <StepFirstPrescoring />}
            { statusApplcation === EStatusApplication.PREAPPROVAL && <ChooseOffer />}
            { statusApplcation === EStatusApplication.APPROVED && <ContinueRegistration />}
        </div>
    )
}