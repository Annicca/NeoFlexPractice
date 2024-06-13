import { FC } from "react";
import { MOCK_PHOTO } from "shared/const";

export const Image: FC<React.ImgHTMLAttributes<HTMLImageElement>> = ({
  src,
  ...otherProps
}) => {
  return <img src={src || MOCK_PHOTO} {...otherProps} />;
};
