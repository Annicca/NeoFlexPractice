import { useState } from "react";
import { ErrorMessage, InputCode, Loader } from "shared/ui";
import { api } from "shared/api/api";
import { useApplicationStore } from "app/store";

import "./EnterCode.scss";

export const EnterCode = () => {
  const applicationId = useApplicationStore((state) => state.applicationId)
  const fetchApplication = useApplicationStore((state) => state.fetchApplication)
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (data: string) =>{ 
    setLoading(true);
    setError(null);
    try {
        if(applicationId) {
            await api.confirmCode(applicationId, data);
            fetchApplication(applicationId);
        }
        
    } catch(error) {
        if( error instanceof Error ) setError(error.message)
    } finally {
        setLoading(false);
    }
    
  }

  return (
    <form className="confirm-code">
        <h1 className = "confirm-code__title">Please enter confirmation code</h1>
        <InputCode 
            length={4}
            loading={loading}
            onComplete={code => onSubmit(code)}
        />
        {loading ?  <Loader /> : <ErrorMessage error={error} />}
    </form>
  );
}