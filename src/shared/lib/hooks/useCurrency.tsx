import { useEffect, useState } from "react";
import { TCurrency } from "shared/types";
import { currencyApi } from "shared/api/currencyApi";
import { CURRENCY_INTERVAL } from "shared/const";

export const useCurrency = () => {
  const [currencies, setCurrencies] = useState<TCurrency[]>([]);

  const updateState = () =>
    currencyApi
      .setAllCurrency()
      .then((currencies) => setCurrencies(currencies));

  useEffect(() => {
    updateState();
  }, []);

  useEffect(() => {
    const updateCurrency = setInterval(updateState, CURRENCY_INTERVAL);
    return () => clearInterval(updateCurrency);
  }, []);

  console.log(currencies);

  return currencies;
};
