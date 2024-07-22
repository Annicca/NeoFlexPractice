import { FC } from "react"
import { TIcon } from "shared/types"

export const ArrowIcon: FC<TIcon> = ({
    width = "14",
    height = "9",
    className,
  }) => {
    return(
        <svg  width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        className={className} 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg">
            <path d="M13 1L7 7L1 1" stroke="#33363F" strokeWidth="2"/>
        </svg>
    )
}