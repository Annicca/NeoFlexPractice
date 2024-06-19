import { ReactNode } from "react";

export type TListProps<T> = {
  items: T[];
  renderItem: (item: T, index?: number) => ReactNode;
  className?: string;
};

export const List = <T,>(props: TListProps<T>) => {
  return (
    <ul className={props.className}>{props.items?.map(props.renderItem)}</ul>
  );
};
