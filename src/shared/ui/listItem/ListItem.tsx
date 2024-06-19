import { FC, PropsWithChildren } from "react";

type TListItemProps = React.DetailedHTMLProps<
  React.LiHTMLAttributes<HTMLLIElement>,
  HTMLLIElement
>;

export const ListItem: FC<PropsWithChildren<TListItemProps>> = ({
  children,
  ...props
}) => {
  return <li {...props}>{children}</li>;
};
