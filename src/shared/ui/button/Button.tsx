import { FC, ForwardedRef, PropsWithChildren, forwardRef } from "react";
import classnames from "classnames";
import "./Button.scss";

type TButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  mode?: "clear" | "error";
};

export const Button = forwardRef(function Button(
  props: TButtonProps,
  ref: ForwardedRef<HTMLButtonElement>
) {
  const {
    children,
    mode = "default",
    className,
    type = "button",
    ...buttonProps
  } = props;
  return (
    <button
      type={type}
      ref={ref}
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
});
