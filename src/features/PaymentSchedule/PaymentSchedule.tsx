import { useState } from "react";
import { DOCUMENTS, EStatusApplication } from "shared/const"
import { Button, Table, TitleForm } from "shared/ui"
import { AgreementForm } from "features/AgreementForm";
import { lib, useSortable, useStatusApplication } from "shared/lib";
import { DenyApplicationModal } from "features/DenyApplicationModal";
import { WaitMessage } from "widgets";

import "./PaymentSchedule.scss";


export const PaymentSchedule = () => {
    const [isOpenDenyModal, setIsOpenDenyModal] = useState(false)

    const DOCUMENT_COLUMN_HEADERS = lib.keysToArrayOfObjects(DOCUMENTS[0])
    const { items, requestSort, sortConfig } = useSortable(DOCUMENTS, { 
        key: DOCUMENT_COLUMN_HEADERS[0].value,
        direction : "asc"
    });

    const statusApplication = useStatusApplication();

    const toggleDenyModal = () => {
        setIsOpenDenyModal(isOpenDenyModal => !isOpenDenyModal)
    }

    if(statusApplication === EStatusApplication.DOCUMENT_CREATED) return <WaitMessage title="Documents are formed" subtitle="Documents for signing will be sent to your email" />

    return(
        <section className="payment">
            <TitleForm title="Payment Schedule" step={3} classNameContainer="payment__title"/>
            <Table 
                columns={DOCUMENT_COLUMN_HEADERS}
                data={items}
                isSortable
                sortedConfig={sortConfig}
                onColumnHeaderClick={requestSort}
                classNameTableContainer="payment-table"
                classNameColumnHeader="payment-table__header"
                classNameCell="payment-table__cell"
            />
            <div className="payment__bottom">
                <Button mode="error" className="payment__deny" onClick={toggleDenyModal}>
                    Deny
                </Button>
                <AgreementForm />
            </div>
            <DenyApplicationModal 
                isOpen = {isOpenDenyModal}
                onClose={toggleDenyModal}
            />
        </section>
        
    )
}
