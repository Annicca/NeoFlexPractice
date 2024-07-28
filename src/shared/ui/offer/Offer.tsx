import { FC } from "react";
import { TOffer } from "shared/types"
import { ErrorIcon, OfferIcon, SuccessIcon } from "../icons";

import "./Offer.scss";
import { ContinueButton } from "../continueButton";

type TOfferProps = {
    offer: TOffer;
    isLoading: boolean;
    onChoose: (offer: TOffer) => void;
}

export const Offer:FC<TOfferProps> = ({offer, isLoading = false, onChoose}) => {
    return(
        <div className="offer">
            <div className="offer__inner">
                <OfferIcon />
                <div className="offer__info">
                    <div className="offer__text">{`Requested amount: ${offer.requestedAmount} ₽`}</div>
                    <div className="offer__text">{`Total amount: ${offer.totalAmount} ₽`}</div>
                    <div className="offer__text">{`For ${offer.term} months`}</div>
                    <div className="offer__text">{`Monthly payment: ${offer.monthlyPayment} ₽`}</div>
                    <div className="offer__text">{`Your rate: ${offer.rate} %`}</div>
                    <div className="offer__text">Insurance included {offer.isInsuranceEnabled ? <SuccessIcon/> : <ErrorIcon />}</div>
                    <div className="offer__text">Salary client {offer.isSalaryClient ? <SuccessIcon/> : <ErrorIcon />}</div>
                </div>
            </div>
            <ContinueButton loading = {isLoading} className="offer__select" onClick={() => onChoose(offer)} text="Select" />
        </div>
    )
}