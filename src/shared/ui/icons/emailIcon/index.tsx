import { FC } from "react";
import { TIcon } from "shared/types";

export const EmailIcon: FC<TIcon> = ({
  className,
  width = "29",
  height = "38",
  fillColor,
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
        d="M18.7798 19.1104L28.1806 27.0882V10.7957L18.7798 19.1104Z"
        fill={fillColor || "#9092B0"}
      />
      <path
        d="M0.29538 10.7957V27.0882L9.69619 19.1104L0.29538 10.7957Z"
        fill={fillColor || "#9092B0"}
      />
      <path
        d="M26.4378 6.05127H2.0382C1.16853 6.05127 0.478368 6.92158 0.347656 8.04222L14.238 20.3272L28.1283 8.04222C27.9976 6.92158 27.3075 6.05127 26.4378 6.05127Z"
        fill={fillColor || "#9092B0"}
      />
      <path
        d="M17.1831 20.5236L14.717 22.704C14.5706 22.8327 14.4051 22.8959 14.2378 22.8959C14.0705 22.8959 13.9049 22.8327 13.7585 22.704L11.2924 20.5212L0.350922 29.8116C0.485119 30.9229 1.17179 31.7861 2.03798 31.7861H26.4376C27.3037 31.7861 27.9904 30.9229 28.1246 29.8116L17.1831 20.5236Z"
        fill={fillColor || "#9092B0"}
      />
    </svg>
  );
};
