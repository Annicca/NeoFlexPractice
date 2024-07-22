import { ForwardedRef, ReactNode, forwardRef } from "react";

export type TListProps<T> = React.HTMLAttributes<HTMLUListElement> & {
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
};

const ListInner = <T,>(
  props: TListProps<T>,
  ref: ForwardedRef<HTMLUListElement>
) => {
  const { items, renderItem, ...otherProps } = props;
  return (
    <ul ref={ref} {...otherProps}>
      {items?.map(renderItem)}
    </ul>
  );
};

export const List = forwardRef(ListInner) as <T>(
  props: TListProps<T> & { ref?: ForwardedRef<HTMLUListElement> }
) => ReturnType<typeof ListInner>;
