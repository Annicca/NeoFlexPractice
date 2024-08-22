import { Button } from "shared/ui";
import { lib, useStatusApplication } from "shared/lib";
import { STATUS_APPLICATION } from "shared/const";

import "./ButtonApply.scss";

export const ButtonApply = () => {
    const statusApplcation = useStatusApplication();

    return(
        <Button className="btn-apply" onClick={() => lib.scrollTo("#form")}>
            {statusApplcation ? STATUS_APPLICATION[statusApplcation] : "Apply for card"}
        </Button>
    )
}