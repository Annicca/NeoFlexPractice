import { FC, useState } from 'react';
import { TModalProps } from 'shared/types';
import { Button, ContinueButton, Modal } from 'shared/ui';
import { useStatusApplication } from 'shared/lib';
import { EStatusApplication, RoutersPath } from 'shared/const';
import { useNavigate } from 'react-router';
import { useApplicationStore } from 'app/store';
import { api } from 'shared/api/api';

import "./DenyApplicationModal.scss";

export const DenyApplicationModal:FC<TModalProps> = ({isOpen, onClose}) => {
    const statusApplication = useStatusApplication()
    const applicationId = useApplicationStore((state) => state.applicationId)
    const fetchApplication = useApplicationStore((state) => state.fetchApplication)
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);

    const deny = async() => {
        setIsLoading(true);
        if(applicationId) {
            await api.denyApplication(applicationId);
            fetchApplication(applicationId);
        }
        setIsLoading(false);
    }

    return(
        <Modal
        isOpen={isOpen}
        onClose={onClose}
        title='Deny application'
      >
        {
            statusApplication === EStatusApplication.CLIENT_DENIED ?
            <div className="deny-application">
                <div className="deny-application__message">Your application has been deny!</div>
                <div className="deny-application__buttons">
                    <Button className='deny-application__home' onClick={() => navigate(RoutersPath.home)}>
                        Go home
                    </Button>
                </div>
            </div> :
            <div className="deny-application">
                <div className="deny-application__message">You exactly sure, you want to cancel this application?</div>
                <div className="deny-application__buttons">
                    <ContinueButton onClick={deny} text='Deny' loading={isLoading} mode='error' className="deny-application__deny"/>
                    <Button onClick={onClose} className="deny-application__cancel">
                        Cancel
                    </Button>
                </div>
            </div>   
        }
      </Modal>
    )
}