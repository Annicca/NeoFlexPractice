import { TKeyLAbel, TSortConfig } from "shared/types";
import { Button } from "../button"
import { ArrowDropIcon } from "../icons";
import classNames from "classnames";

import "./TableHeader.scss";

type TTableHeaderProps<T extends object> = {
    columnName: TKeyLAbel<T>;
    sortedConfig: TSortConfig<T> | null,
    setSort: (key: keyof T) => void;
}

export const TableHeader = <T extends object,>({columnName, sortedConfig, setSort}: TTableHeaderProps<T>)=> {

    return(
        <Button mode="clear" className="table-btn" onClick={() => setSort(columnName.value)}>
            {columnName.label}
            {<ArrowDropIcon className={classNames("arrow", {"arrow_asc" : sortedConfig?.key === columnName.value && sortedConfig?.direction === "asc"})} />}
        </Button>
    )
}