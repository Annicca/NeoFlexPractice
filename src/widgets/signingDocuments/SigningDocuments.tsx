import { SignDocumentForm } from "features"
import { File, TitleForm } from "shared/ui"
import { useApplicationStore } from "app/store";
import { WaitMessage } from "widgets/waitMessage";

import "./SigningDocuments.scss";


export const SigningDocuments = () => {
    const isSignedDocument = useApplicationStore((state) => state.isSignedDocument);
    if(isSignedDocument) {
        return (
            <WaitMessage 
                title="Documents have been successfully signed and sent for approval" 
                subtitle="Within 10 minutes you will be sent a PIN code to your email for confirmation" 
                classNameContainer="wait-documents"
            />
        )
    }
    return(
        <section className="signing-documents">
            <TitleForm title="Signing of documents" step={4} classNameContainer="signing-documents__title"/>
            <div className="signing-documents__text">
                Information on interest rates under bank deposit agreements with individuals. Center for Corporate Information Disclosure. Information of
                a professional participant in the securities market. Information about persons under whose control or significant influence the Partner
                Banks are. By leaving an application, you agree to the processing of personal data, obtaining information, obtaining access to a credit
                history, using an analogue of a handwritten signature, an offer, a policy regarding the processing of personal data, a form of consent to the
                processing of personal data.
            </div>
            <File fileName="Information on your card" fileHref="https://neostudy.neoflex.ru/pluginfile.php/137828/mod_assign/intro/credit-card-offer.pdf" />
            <div className="signing-documents__form">
                <SignDocumentForm />
            </div>
            
        </section>
        
    )
}