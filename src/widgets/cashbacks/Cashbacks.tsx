import { CASHBACK_ITEMS } from "shared/const"
import { TCashback } from "shared/types"
import { CashbackItem, List, ListItem } from "shared/ui"

import "./Cashbacks.scss";

export const Cashbacks = () => {
    return(
        <List
            className="cashbacks"
            items={CASHBACK_ITEMS}
            renderItem={(item: TCashback) => 
                <ListItem key={item.name} className="cashbacks__item">
                    <CashbackItem cashbackItem={item} />
                </ListItem>
            }
        />
    )
}