import { useEffect } from "react"
import { useStatusApplication } from "./useStatusApplication"
import { EStatusApplication } from "shared/const"
import { useApplicationStore } from "app/store"

export const useCheckApplicationStatus = () => {
    const statusApplication = useStatusApplication()
    const resetStore = useApplicationStore((state) => state.resetStore)

    useEffect(() => {
        if(statusApplication === EStatusApplication.CC_DENIED || 
            statusApplication === EStatusApplication.CLIENT_DENIED || 
            statusApplication === EStatusApplication.CREDIT_ISSUED) {
            resetStore()
        }
    },[])
}