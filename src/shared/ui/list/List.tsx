import { ReactNode } from "react";

export type TListProps<T> = React.HTMLAttributes<HTMLUListElement> & {
  items: T[];
  renderItem: (item: T, index?: number) => ReactNode;
};

export const List = <T,>(props: TListProps<T>) => {
  const { items, renderItem, ...otherProps } = props;
  return <ul {...otherProps}>{items?.map(renderItem)}</ul>;
};
