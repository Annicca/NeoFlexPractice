import { FC } from "react"
import { TIcon } from "shared/types"

export const FileIcon: FC<TIcon> = ({
    width = "60",
    height = "60",
    className,
  }) => {
    return(
        <svg width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5 9.5C12.5 8.39543 13.3954 7.5 14.5 7.5H29.75C29.8881 7.5 30 7.61193 30 7.75V23C30 24.1046 30.8954 25 32 25H47.25C47.3881 25 47.5 25.1119 47.5 25.25V50.5C47.5 51.6046 46.6046 52.5 45.5 52.5H14.5C13.3954 52.5 12.5 51.6046 12.5 50.5V9.5Z" fill="#2A4157" fillOpacity="0.24"/>
            <path d="M32.5 21.5V8.10355C32.5 7.88083 32.7693 7.76929 32.9268 7.92678L47.0732 22.0732C47.2307 22.2307 47.1192 22.5 46.8964 22.5H33.5C32.9477 22.5 32.5 22.0523 32.5 21.5Z" fill="#222222"/>
            <path d="M21.25 33.75L36.25 33.75" stroke="#222222" strokeLinecap="round"/>
            <path d="M21.25 41.25L33.75 41.25" stroke="#222222" strokeLinecap="round"/>
        </svg>
    )
}