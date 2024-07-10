import { RATES_AND_CONDITIONS } from "shared/const"
import { TRates } from "shared/types"
import { List, ListItem, RateItem } from "shared/ui"

import "./RatesConditions.scss";

export const RatesConditions = () => {
    return(
        <List 
            className="rates"
            items={RATES_AND_CONDITIONS}
            renderItem={(item: TRates) => 
                <ListItem key = {item.title} className="rates__item">
                    <RateItem {...item}/>
                </ListItem>
            }
        />
    )
}