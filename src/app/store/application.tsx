import { api } from 'shared/api/api';
import { TApplication, TOffer } from 'shared/types';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware'

type TStateApplication = {
    applicationId: number | null,
    application: TApplication | null,
    offers: TOffer[] | null
}

type TActionsApplication = {
    setApplicationId: (id: number) => void,
    fetchApplication: (id: number) => void,
    setOffers: (offers: TOffer[] | null) => void,
}

export const useApplicationStore = create<TStateApplication & TActionsApplication>()(
    devtools(
        persist(
            (set) => ({
                applicationId: null,
                application: null,
                offers: null,
                setApplicationId: (id: number) => set(() => ({ applicationId: id})),
                fetchApplication: async (id: number) => {
                    const response = await api.getApplication(id)
                    set(() => ({ application: response}))
                },
                setOffers: (offers: TOffer[] | null) => set(() => ({ offers: offers})),
            }),
            { name: 'applicationStore' },
        )
    )
)