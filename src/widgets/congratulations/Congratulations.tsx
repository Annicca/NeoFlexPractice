import { useNavigate } from "react-router"
import { RoutersPath } from "shared/const"
import { Button, OfferIcon } from "shared/ui"

import "./Congratulations.scss"

export const Congratulations = () => {
    const navigate = useNavigate()
    return(
        <section className="congratulations">
            <OfferIcon />
            <h1 className="congratulations__title">Congratulations! You have completed your new credit card.</h1>
            <div className="congratulations__subtitle">Your credit card will arrive soon. Thank you for choosing us!</div>
            <Button onClick={() => navigate(RoutersPath.home)}>
                View other offers of our bank
            </Button>
        </section>
    )
}