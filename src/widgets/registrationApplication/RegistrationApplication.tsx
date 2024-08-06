import { useApplicationStore } from "app/store"
import { ScoringForm } from "features"
import { WaitMessage } from "widgets/waitMessage"

export const RegistrationApplication = () => {
    const isEndRegistrations = useApplicationStore((state) => state.isEndRegistrations)

    return(
        <>
            {
                isEndRegistrations ?
                    <WaitMessage title="Wait for a decision on the application" subtitle="The answer will come to your mail within 10 minutes"/>
                :
                    <ScoringForm />
            }
        </>
    )
}