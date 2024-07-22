import { FC, PropsWithChildren } from "react"
import { Link, LinkProps } from "react-router-dom"
import classnames from "classnames";

export const LinkButton:FC<PropsWithChildren<LinkProps>> = ({children, className, ...props}) =>{
    return(
        <Link className={classnames(
            "button",
            className
        )}
        {...props}
        >
            {children}
        </Link>
    )
}