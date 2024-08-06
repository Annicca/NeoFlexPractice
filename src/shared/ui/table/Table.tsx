import classNames from "classnames";
import { List } from "../list"
import { ListItem } from "../listItem";
import { TKeyLAbel, TSortConfig } from "shared/types";
import { TableHeader } from "../tableHeader";

import "./Table.scss";


type TTableProps<T extends object> = {
    columns: TKeyLAbel<T>[];
    data: Array<T>;
    sortedConfig: TSortConfig<T> | null;
    isSortable?: boolean;
    onColumnHeaderClick?: (key: keyof T) => void
    classNameRow?: string;
    classNameCell?: string;
    classNameColumnHeader?: string;
    classNameTableContainer?: string;
}

export const Table = <T extends object,>(props: TTableProps<T>) => {
    const { columns, data, isSortable, sortedConfig, onColumnHeaderClick = () => {}, classNameRow, classNameCell, classNameColumnHeader, classNameTableContainer } = props;
    
    return(
        <div className={classNameTableContainer}>
            <List 
                className={classNames("table-row", classNameRow)}
                items={columns}
                renderItem={(columnName) => <ListItem className={classNameColumnHeader} key={columnName.value.toString()}>
                    {isSortable ? 
                        <TableHeader sortedConfig = {sortedConfig} setSort = {onColumnHeaderClick} columnName={columnName}/> : 
                        columnName.label
                    }
                </ListItem>}
            />
            <List
                items={data}
                renderItem={(item: T, index) => 
                    <ListItem
                        key={Object.keys(item)[0]+index}
                        
                    >
                        <List 
                            className={classNames("table-row", classNameRow)}
                            items={Object.values(item)}
                            renderItem={(value, index) => <ListItem className={classNameCell} key={value + index}>{value}</ListItem>}
                        />
                    </ListItem>

                }
            />
        </div>
        
    )
}