import { useMemo, useState } from "react";
import { TDirectionSort, TSortConfig } from "shared/types";

export const useSortable = <T extends object,> (items: Array<T>, config: TSortConfig<T> | null = null) => {
    const [sortConfig, setSortConfig] = useState<TSortConfig<T> | null>(config);
    
    const sortedItems = useMemo(() => {
      let sortableItems = [...items];
      if (sortConfig !== null) {
        sortableItems.sort((a, b) => {
          if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === 'asc' ? -1 : 1;
          }
          if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === 'asc' ? 1 : -1;
          }
          return 0;
        });
      }
      return sortableItems;
    }, [items, sortConfig]);
  
    const requestSort = (key: keyof T) => {
      let direction: TDirectionSort = 'asc';
      if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
        direction = 'desc';
      }
      setSortConfig({ key, direction });
    }
  
    return { items: sortedItems, requestSort, sortConfig};
}