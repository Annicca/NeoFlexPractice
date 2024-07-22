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

export type TCashback = {
  percent: number,
  name: string,
  isUp: boolean
}

export type TFaq = {
  question: string;
  answer: string;
}

export type TPrescoring = {
  amount: number,
  term: number,
  firstName: string,
  lastName: string,
  middleName: string | null,
  email: string,
  birthdate: string | Date,
  passportSeries: string,
  passportNumber: string
}

export type TOption = {
  label: string;
  value: string | number;
}