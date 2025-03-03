import { FC } from "react";
import { TIcon } from "shared/types";

export const ArrowSliderIcon: FC<TIcon> = ({
  width = "25",
  height = "26",
  className,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M25 17H9.84211V24.3914C9.84211 24.5845 9.59562 24.6655 9.48109 24.5101L1 13L9.48109 1.48994C9.59562 1.33452 9.84211 1.41552 9.84211 1.60858V9H25"
        stroke="#222222"
      />
    </svg>
  );
};
