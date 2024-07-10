import { ReactElement, ReactNode } from "react";

export type TLink = {
  label: string;
  href: string;
};

export type TIcon = {
  fillColor?: string;
  className?: string;
  width?: string;
  height?: string;
};

export type TCurrency = {
  name: string;
  value: number | null;
};

export type TNews = {
  urlToImage: string | null;
  title: string | null;
  url: string;
  description: string | null;
};

export type TCondition = {
  title: string,
  description: string,
  toolTip: string;
}

export type TTab = {
  label: string;
  children: ReactNode;
}

export type TAboutCardItem = {
  icon: ReactNode;
  title: string;
  description: string;
}

export type TRates = {
  title: string;
  description: string | string[];
}