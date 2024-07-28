import { CheckBoxForm } from "features/CheckBoxForm/CheckBoxForm";
import { api } from "shared/api/api";


export const AgreementForm = () => {
    return(
        <CheckBoxForm label="I agree with the payment schedule" asyncFunc={api.documentAgree} />
    )
}