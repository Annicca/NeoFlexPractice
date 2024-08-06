import { useApplicationStore } from "app/store";
import { CheckBoxForm } from "features/CheckBoxForm/CheckBoxForm";
import { api } from "shared/api/api";


export const SignDocumentForm = () => {
    const setIsSignedDocument = useApplicationStore((state) => state.setIsSignedDocument);
    const sign = async(applicationId: number) => {
        await api.signDocument(applicationId);
        setIsSignedDocument(true);
    }
    return(
        <CheckBoxForm label="I agree" asyncFunc={sign} />
    )
}