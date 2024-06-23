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

export const LINK_NEOFLEX = "https://www.neoflex.ru/";

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

export const FOOTER_LINKS: TLink[] = [
  {
    label: "About bank",
    href: "#",
  },
  {
    label: "Ask a Question",
    href: "#",
  },
  {
    label: "Quality of service",
    href: "#",
  },
  {
    label: "Requisites",
    href: "#",
  },
  {
    label: "Press center",
    href: "#",
  },
  {
    label: "Bank career",
    href: "#",
  },
  {
    label: "Investors",
    href: "#",
  },
  {
    label: "Analytics",
    href: "#",
  },
  {
    label: "Business and processes",
    href: "#",
  },
  {
    label: "Compliance and business ethics",
    href: "#",
  },
];

export const CURRENCY_INTERVAL = 1000 * 60 * 15;

export const CURRENCIES_REQUEST = [
  "USD",
  "CNY",
  "CHF",
  "EUR",
  "JPY",
  "TRY",
  "BRL",
  "PLN",
  "UAH",
  "BGN",
  "RON",
  "AZN",
];

export const FEATURES = [
  "Powerfull online protection.",
  "Cashback without borders.",
  "Personal design",
  "Work anywhere in the world",
];

const card1Src = require("/src/shared/assets/images/card1.png");
const card2Src = require("/src/shared/assets/images/card2.png");
const card3Src = require("/src/shared/assets/images/card3.png");
const card4Src = require("/src/shared/assets/images/card4.png");

export const CARDS = [card1Src, card2Src, card3Src, card4Src];

export const MOCK_PHOTO = require("/src/shared/assets/images/mock.png");

export const REMOVED_DESCRIPTION = "[Removed]";
