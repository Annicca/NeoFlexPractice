import { useState } from "react";
import { useApplicationStore } from "app/store"
import { List, ListItem, Offer } from "shared/ui";
import { TOffer } from "shared/types";
import { api } from "shared/api/api";

import "./ChooseOffer.scss";

export const ChooseOffer = () => {
    const offers = useApplicationStore((state) => state.offers);
    const fetchApplication = useApplicationStore((state) => state.fetchApplication);

    const [loading, setLoading] = useState(false);

    const onChooseOffer = async(offer: TOffer) => {
        try{
            setLoading(true);
            await api.chooseOffer(offer);
            fetchApplication(offer.applicationId)
        } finally {
            setLoading(false);
        }
    }

    if(!offers) return  <div data-testid = "offers">Sorry no offers</div>
    return (
        <List 
            data-testid = "offers"
            className="offers"
            items={offers}
            renderItem={(item, index) => <ListItem key={item.monthlyPayment + index} className="offers__item"><Offer isLoading = {loading} offer={item} onChoose={onChooseOffer}/></ListItem>}
        />
    )
}