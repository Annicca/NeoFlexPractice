import { useApplicationStore } from "app/store"
import { EStatusApplication } from "shared/const";

export const useStatusApplication = (): EStatusApplication | null => {
    const application = useApplicationStore((state) => state.application)
    return application?.status || null;
}