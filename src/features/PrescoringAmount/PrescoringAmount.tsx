
import { FC } from "react";
import { Divider, SelectAmount, TitleForm } from "shared/ui";
import { UseFormRegister } from "react-hook-form";
import { TPrescoring } from "shared/types";
import { MAX_AMOUNT, MIN_AMOUNT } from "shared/const";
import "./PrescoringAmount.scss";

type TPrescoringAmount = {
    register: UseFormRegister<TPrescoring>,
    amount: number,
    handleAmount: (amount: number) => void,
}

export const PrescoringAmount:FC<TPrescoringAmount> = ({register, handleAmount, amount = 0}) => {

    return(
        <div className="amount-container">
            <div className="amount-container__inner">
                <TitleForm step={1} title="Customize your card" />
                <SelectAmount {...register("amount")} handleAmount = {handleAmount} min={MIN_AMOUNT} max={MAX_AMOUNT} amount = {amount || MIN_AMOUNT} />
            </div>
            <Divider mode="dashed" position="left" orientation="vertical" color="#80808066"/>
            <div className="amount-container__chosen">
                <div className="amount-container__subtitle">You have chosen the amount</div>
                <div className="amount-container__value">{amount.toLocaleString()} ₽</div>
            </div>
        </div>
    )
}