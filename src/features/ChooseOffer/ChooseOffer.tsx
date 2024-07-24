import { useApplicationStore } from "app/store"
import { List, ListItem, Offer } from "shared/ui";
import { TOffer } from "shared/types";
import { api } from "shared/api/api";

import "./ChooseOffer.scss";
import { useState } from "react";

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

    if(!offers) return
    return (
        <List 
            className="offers"
            items={offers}
            renderItem={(item, index) => <ListItem key={item.monthlyPayment + index} className="offers__item"><Offer isLoading = {loading} offer={item} onChoose={onChooseOffer}/></ListItem>}
        />
    )
}