import { useCurrency } from "shared/lib";
import { TCurrency } from "shared/types";
import { Button, CurrencyItem, List, ListItem } from "shared/ui";

import "./ListCurrency.scss";
import { useState } from "react";

export const ListCurrency = () => {
  const currencies = useCurrency();

  const [isShowAll, setIsShowAll] = useState(false);

  const toggleShow = () => {
    setIsShowAll((isShowAll) => !isShowAll);
  };

  if (currencies.length === 0) {
    return <div className="currency-loading">Loading...</div>;
  }

  return (
    <div>
      <List
        className="currency-list"
        items={isShowAll ? currencies : currencies.slice(0, 6)}
        renderItem={(item: TCurrency) => (
          <ListItem key={item.name}>
            <CurrencyItem {...item} />
          </ListItem>
        )}
      />
      <Button mode="clear" onClick={toggleShow} className="currency-list__all">
        {isShowAll ? "Hide courses" : "All courses"}
      </Button>
    </div>
  );
};
