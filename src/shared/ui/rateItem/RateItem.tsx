import { TRates } from "shared/types";

import "./RateItem.scss";

export const RateItem = (rateItem: TRates) => {
    return(
        <div className="rate-item">
            <div className="rate-item__name">{rateItem.title}</div>
            {Array.isArray(rateItem.description) ? 
                <div className="rate-item__description-container">
                    {rateItem.description.map((description) => <div className="rate-item__description" key = {description}>{description}</div>)}
                </div>
                :
                <div className="rate-item__description">{rateItem.description}</div>
            }
        </div>
    )
}