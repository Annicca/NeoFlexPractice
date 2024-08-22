import { useEffect, useRef, useState } from "react";
import { EmailInput } from "shared/ui/";
import { api } from "shared/api/api";
import { lib } from "shared/lib";

import "./GetNewsForm.scss";


export const GetNewsForm = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const [isSubscribed, setIsSubscribed]= useState(false);
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(emailRef.current?.value){
      await api.emailSubscribe(emailRef.current?.value)
      setIsSubscribed(true)
    }
  };

  useEffect(() => {
    const checkSubscribed = lib.checkSubscribe()
    setIsSubscribed(checkSubscribed)
  }, [])

  if(isSubscribed) return <div>You are already subscribed to the bank's newsletter</div>

  return (
    <form onSubmit={(event) => onSubmit(event)} name="form-email" className="form-email">
      <EmailInput ref={emailRef} />
    </form>
  );
};
