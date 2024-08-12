
import { FC, forwardRef, InputHTMLAttributes } from "react";
import classNames from "classnames";
import { Label } from "../label";
import "./SelectAmount.scss";

type TSelectAmout = InputHTMLAttributes<HTMLInputElement> & {
    amount: number;
    handleAmount: (amount: number) => void;
    max:number;
    min: number;
}

export const SelectAmount:FC<TSelectAmout> = forwardRef<HTMLInputElement, TSelectAmout>((props, ref) => {
    const {min, max, className, amount, handleAmount, ...inputProps} = props;

    const setAmount = (event: React.ChangeEvent<HTMLInputElement>) => {
        handleAmount(Number(event.target.value));
    }

    return(
        <div className="amount">
            <Label htmlFor={props.name} >Select amount</Label>
            <input type="number" className="amount__current" value={amount} onChange={setAmount} min={min} max={max} role = "textbox"/>
            <div className="amount__range-container">
                <input type="range" style = {{backgroundSize: ((amount - min) * 100 / (max - min)) + '% 100%'}} className={classNames("amount__range", className)} ref = {ref} min={min} max={max} {...inputProps}/>
            </div>
            
            <div className="amount__final-values">
                <div className="amount__final-text">{min}</div>
                <div className="amount__final-text">{max}</div>
            </div>
        </div>
    )
})