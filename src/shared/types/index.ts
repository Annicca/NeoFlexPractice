import { ReactNode } from "react";
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

export type TOption<T> = {
  label: string;
  value: T;
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

export type TGender = "MALE" | "FEMALE";
export type TMaritalStatus = "MARRIED" | "DIVORCED" | "SINGLE" | "WIDOW_WIDOWER";
export type TEmploymentStatus = "UNEMPLOYED" | "SELF_EMPLOYED" | "EMPLOYED" | "BUSINESS_OWNER";
export type TPosition = "WORKER" | "MID_MANAGER" | "TOP_MANAGER" | "OWNER";

export type TApplication = {
  id: number,
  client: {
    firstName: string,
    lastName: string,
    middleName: string | null,
    email: string,
    gender: TGender,
    birthdate: string,
    passportSeries: string,
    passportNumber: string,
    passportIssueDate: string | null,
    passportIssueBranch: string | null,
    maritalStatus: TMaritalStatus | null,
    dependentAmount: number | null,
    employment: null | {
      employmentStatus: TEmploymentStatus,
      employerINN: string,
      salary: number,
      position: TPosition,
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

export type TScoring  = {
  gender: TGender,
  maritalStatus: TMaritalStatus,
  dependentAmount: number,
  passportIssueDate: string,
  passportIssueBranch: string,
  employment: {
    employmentStatus: TEmploymentStatus,
    employerINN: number,
    salary: number,
    position: TPosition,
    workExperienceTotal: number,
    workExperienceCurrent: number,
  },
  account: string,
}

export type TDocument = {
  number: number,
  date: string | Date,
  totalPayment: number,
  interestPayment: number,
  debtPayment: number,
  remainingDebt: number,
}

export type TDirectionSort = 'asc' | 'desc'

export type TSortConfig<T extends object> = {
    key: keyof T;
    direction: TDirectionSort;
}

export type TKeyLAbel<T> = {
  value: keyof T,
  label: string,
}

export type TModalProps = {
  isOpen: boolean;
  onClose: () => void;
}