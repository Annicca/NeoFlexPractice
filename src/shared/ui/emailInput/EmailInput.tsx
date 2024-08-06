import { forwardRef } from "react";
import { Button } from "../button";
import { EmailIcon, SendIcon } from "../icons";
import "./EmailInput.scss";

type TEmailInputProps = React.InputHTMLAttributes<HTMLInputElement>;
export const EmailInput = forwardRef<HTMLInputElement, TEmailInputProps>(
  (props, ref) => {
    return (
      <div className="email">
        <div className="email__inner">
          <EmailIcon className="email__icon" />
          <input
            {...props}
            type="email"
            placeholder="Your email"
            ref={ref}
            className="email__input"
          />
        </div>
        <Button mode="clear" type="submit" className="email__submit">
          <SendIcon className="email__send-icon" />
          <span className="email__submit-text">Subscribe</span>
        </Button>
      </div>
    );
  }
);
