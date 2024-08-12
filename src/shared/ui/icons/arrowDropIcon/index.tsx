import { FC } from "react"
import { TIcon } from "shared/types"

export const ArrowDropIcon: FC<TIcon> = ({
    width = "24",
    height = "24",
    className,
  }) => {
    return(
        <svg 
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        className={className}  fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.1921 9.23047L15.9065 13.6879C16.3408 14.2089 15.9702 15 15.292 15L8.70803 15C8.02976 15 7.65924 14.2089 8.09346 13.6879L11.8079 9.23047C11.9079 9.11053 12.0921 9.11053 12.1921 9.23047Z" fill="#222222"/>
        </svg>
    )
}