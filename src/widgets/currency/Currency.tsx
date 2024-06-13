import { FC } from "react";
import { lib } from "shared/lib";
import { ListCurrency } from "features";
import { BankIcon, Button } from "shared/ui";
import "./Currency.scss";

export const Currency: FC = () => {
  return (
    <section className="currency">
      <div className="currency__top">
        <h2 className="title-h2">Exchange rate in internet bank</h2>
        <div className="currency__date">
          <span>Update every 15 minutes,</span>{" "}
          <span>MSC {lib.getCurrentDate()}</span>
        </div>
      </div>
      <div className="currency__subtitle">Currency</div>
      <div className="currency__content">
        <ListCurrency />
        <BankIcon className="currency__icon" />
      </div>
    </section>
  );
};
