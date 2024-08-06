import React, { PropsWithChildren } from 'react';
import classNames from 'classnames';
import "./Divider.scss";

type TDividerProps = {
  orientation?: 'horizontal' | 'vertical';
  position?: "left" | "right" | "top" | "bottom";
  mode: "dashed" | "solid" | "dotted";
  color?: string;
  size?: number;
  classNameContainer?: string;
  classNameDivider?: string;
}

export const Divider: React.FC<PropsWithChildren<TDividerProps>> = ({ 
    orientation = 'horizontal', 
    position = "right", 
    color = 'black',
    mode = "solid",
    size = 1, 
    children,
    classNameContainer,
    classNameDivider }) => {

  const style = {
    width: orientation === 'horizontal' ? '100%' : "1px",
    height: orientation === 'vertical' ? '100%' : "1px",
    borderTop: orientation === 'horizontal' ? `${size}px ${mode} ${color}` : "none",
    borderLeft: orientation === 'vertical' ? `${size}px ${mode} ${color}` : "none",
  };

  const divider = <div style={style} className={classNames("divider", classNameDivider)} />

  return (
    <div className={classNames('divider-container', {['divider-container_left'] : position === 'left'}, classNameContainer)}>
        {((orientation === 'horizontal' || orientation === "vertical") && position === "left") && 
          divider
        }
        {children}
        {((orientation === "horizontal" || orientation === "vertical") && position === "right") &&
          divider
        }
    </div>
  );
};