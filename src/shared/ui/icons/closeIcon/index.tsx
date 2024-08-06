import { FC } from "react"
import { TIcon } from "shared/types"

export const CloseIcon: FC<TIcon> = ({
    width = "24",
    height = "24",
    className,
  }) => {
    return(
        <svg width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        className={className}  fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 6L6 18" stroke="#33363F" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"/>
        <path d="M6 6L18 18" stroke="#33363F" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"/>
        </svg>
    )
}