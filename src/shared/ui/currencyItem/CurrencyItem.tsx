import { FC } from "react";
import { TCurrency } from "shared/types";

import "./CurrencyItem.scss";

export const CurrencyItem: FC<TCurrency> = ({ name, value }) => {
  return (
    <div className="currency-item">
      <div className="currency-item__name">{name}:</div>
      <div className="currency-item__value">
        {value ? value.toFixed(2) : "not found"}
      </div>
    </div>
  );
};
