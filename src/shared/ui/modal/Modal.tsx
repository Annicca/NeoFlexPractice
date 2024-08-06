import { FC, PropsWithChildren } from "react";
import Modal from 'react-modal';
import { TModalProps } from "shared/types";
import { Button } from "../button";
import { CloseIcon } from "../icons";

import "./Modal.scss";

type TModalElementProps = TModalProps & {
    title: string
}

export const ModalElement:FC<PropsWithChildren<TModalElementProps>> = ({isOpen, onClose, title, children}) => {
    return(
        <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        className="modal-container"
        style={{
            overlay: {
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
            },
            content: {
                position: 'relative',
                padding: '16px',
                margin: 'auto',
                top: "50%",
                transform: 'translateY(-50%)',
                width: '100%',
                maxWidth: '448px',
                display: 'flex',
                flexDirection: "column",
                backgroundColor: '#fff',
            },
        }}
        ariaHideApp={false}
      >
        <div className="modal-container__title-container">
            <div className="modal-container__title">{title}</div>
            <Button onClick={onClose} mode="clear"><CloseIcon /></Button>
        </div>
        {children}
      </Modal>
    )
}