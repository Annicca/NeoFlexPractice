import { FC } from "react";
import { TOffer } from "shared/types"
import { ErrorIcon, OfferIcon, SuccessIcon } from "../icons";
import { Button } from "../button";
import { Loader } from "../loader";

import "./Offer.scss";

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
            {isLoading ? 
                <Loader />
                :
                <Button className="offer__select" onClick={() => onChoose(offer)}>Select</Button>
            }
        </div>
    )
}