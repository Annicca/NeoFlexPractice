
import { FC } from "react";
import { FileIcon } from "../icons";
import "./File.scss";

type TFileProps = {
    fileHref: string,
    fileName: string,
}

export const File:FC<TFileProps> = ({fileHref, fileName}) => {
    return(
        <div className="file">
            <FileIcon />
            <a href={fileHref} download target="_blank" className="file__link">{fileName}</a>
        </div>
    )
}