import { EnterCode } from "features";
import { EStatusApplication } from "shared/const";
import { useStatusApplication } from "shared/lib"
import { Congratulations } from "widgets/congratulations";

export const LastStep = () => {
    const statusApplication = useStatusApplication();

    if(statusApplication === EStatusApplication.CREDIT_ISSUED) return <Congratulations />;
    return <EnterCode />
}