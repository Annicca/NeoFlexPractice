import { useRef } from "react";
import { EmailInput } from "shared/ui/";

import "./GetNewsForm.scss";

export const GetNewsForm = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(emailRef.current?.value);
  };
  return (
    <form onSubmit={(event) => onSubmit(event)} className="form-email">
      <EmailInput ref={emailRef} />
    </form>
  );
};
