import { Loader } from "shared/ui";

import "./Loading.scss";

export const Loading = ()=> {
    return(
        <div className="wrapper-loading" role = "progressbar">
            <Loader />
        </div>
    )
}