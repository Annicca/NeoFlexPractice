import { FC } from "react"
import { Divider } from "../divider";

import "./Step.scss";

type TStepProps = {
    nameStep: string;
    numberStep: number;
}

export const Step:FC<TStepProps> = ({nameStep, numberStep}) => {
    return(
        <div className="step">
            <Divider size={2} color = "var(--gray8033)">
                <div className="step__number">{numberStep}</div>
            </Divider>
            <div className="step__name">{nameStep}</div>
        </div>
    )
}