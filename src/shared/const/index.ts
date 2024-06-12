import { TLink } from "shared/types";

export enum AppRouters {
  HOME = "home",
  CREDIT_CARD = "creditCard",
  PRODUCT = "product",
  ACCOUNT = "account",
  RESOURCES = "resources",
}

export const RoutersPath: Record<AppRouters, string> = {
  [AppRouters.HOME]: "",
  [AppRouters.CREDIT_CARD]: "credit-card",
  [AppRouters.PRODUCT]: "product",
  [AppRouters.ACCOUNT]: "account",
  [AppRouters.RESOURCES]: "resources",
};

export const HEADER_LINKS: TLink[] = [
  {
    label: "Credit card",
    href: RoutersPath.creditCard,
  },
  {
    label: "Product",
    href: RoutersPath.product,
  },
  {
    label: "Account",
    href: RoutersPath.account,
  },
  {
    label: "Resources",
    href: RoutersPath.resources,
  },
];
