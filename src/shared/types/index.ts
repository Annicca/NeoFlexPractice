import { ReactElement, ReactNode } from "react";
import { EStatusApplication } from "shared/const";

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

export type TOffer = {
  applicationId: number,
  requestedAmount: number,
  totalAmount: number,
  term: number,
  monthlyPayment: number,
  rate: number,
  isInsuranceEnabled: boolean,
  isSalaryClient: boolean
}

export type TApplication = {
  id: number,
  client: {
    firstName: string,
    lastName: string,
    middleName: string | null,
    email: string,
    gender: "MALE" | "FEMALE",
    birthdate: string,
    passportSeries: string,
    passportNumber: string,
    passportIssueDate: string | null,
    passportIssueBranch: string | null,
    maritalStatus: string | null,
    dependentAmount: number | null,
    employment: null | {
      employmentStatus: string,
      employerINN: string,
      salary: number,
      position: string,
      workExperienceTotal: number,
      workExperienceCurrent: number
    },
    account: string | null
  },
  credit: null | {
    amount: number,
    term: number,
    monthlyPayment: number,
    rate: number,
    psk: number,
    isInsuranceEnabled: boolean,
    isSalaryClient: boolean,
    paymentSchedule: [
      {
        number: number,
        date: string,
        totalPayment: number,
        interestPayment: number,
        debtPayment: number,
        remainingDebt: number
      }
    ]
  },
  status: EStatusApplication,
  creationDate: string,
  signDate: string | null,
  sesCode: string,
  statusHistory: [
    {
      status: EStatusApplication,
      time: string,
      changeType: string
    }
  ]
}