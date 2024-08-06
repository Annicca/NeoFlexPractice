import { FC } from "react"
import { TCashback } from "shared/types"

import "./CashbackItem.scss";

type TCashbackItem = {
    cashbackItem: TCashback
}

export const CashbackItem:FC<TCashbackItem> = ({cashbackItem}) => {
    return(
        <div className="cashback">
            <div className="cashback__name">{cashbackItem.name}</div>
            <div className="cashback__persent">{`${cashbackItem.isUp ? "up to" : ""} ${cashbackItem.percent}%`}</div>
        </div>
    )
}