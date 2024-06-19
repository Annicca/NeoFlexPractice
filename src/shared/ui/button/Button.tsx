import { FC, PropsWithChildren } from "react";
import classnames from "classnames";
import "./Button.scss";

type TButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  mode?: "clear" | "error";
};

export const Button: FC<PropsWithChildren<TButtonProps>> = ({
  children,
  mode = "default",
  className,
  type = "button",
  ...buttonProps
}) => {
  return (
    <button
      type={type}
      className={classnames(
        "button",
        {
          ["button_clear"]: mode === "clear",
          ["button_error"]: mode === "error",
        },
        className
      )}
      {...buttonProps}
    >
      {children}
    </button>
  );
};
