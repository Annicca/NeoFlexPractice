import { TAboutCardItem, TCondition, TLink, TRates } from "shared/types";
import { BagIcon, CalendarIcon, ClockIcon, CreditCardIcon, MoneyIcon } from "shared/ui/icons";

export enum AppRouters {
  HOME = "home",
  CREDIT_CARD = "creditCard",
  PRODUCT = "product",
  ACCOUNT = "account",
  RESOURCES = "resources",
}

export const RoutersPath: Record<AppRouters, string> = {
  [AppRouters.HOME]: "/",
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

export const card1Src = require("/src/shared/assets/images/card11.png");
const card2Src = require("/src/shared/assets/images/card2.png");
const card3Src = require("/src/shared/assets/images/card3.png");
const card4Src = require("/src/shared/assets/images/card4.png");

export const CARDS = [card1Src, card2Src, card3Src, card4Src];

export const MOCK_PHOTO = require("/src/shared/assets/images/mock.png");

export const REMOVED_DESCRIPTION = "[Removed]";

export const LIMIT_REQUESTS = 100;

export const CONDITIONS: TCondition[] = [
  {title: "Up to 160 days", description: "No percent", toolTip: "When repaying the full debt up to 160 days."},
  {title: "Up to 600 000 ₽", description: "Credit limit", toolTip:"Over the limit willaccrue percent"},
  {title: "0 ₽", description: "Card service is free", toolTip: "Promotion valid until December 31, 2022."},
];

export const ABOUT_CARD_ITEMS: TAboutCardItem[] = [
  {
    title: "Up to 50 000 ₽",
    description: "Cash and transfers without commission and percent",
    icon: <MoneyIcon />
  },
  {
    title: "Up to 160 days",
    description: "Without percent on the loan",
    icon: <CalendarIcon />
  },
  {
    title: "Free delivery",
    description: "We will deliver your card by courier at a convenient place and time for you",
    icon: <ClockIcon />
  },
  {
    title: "Up to 12 months",
    description: "No percent. For equipment, clothes and other purchases in installments",
    icon: <BagIcon />
  },
  {
    title: "Convenient deposit and withdrawal",
    description: "At any ATM. Top up your credit card for free with cash or transfer from other cards",
    icon: <CreditCardIcon />
  },
]

export const RATES_AND_CONDITIONS: TRates[] = [
  {
    title: "Card currency",
    description: "Rubles, dollars, euro"
  },
  {
    title: "Interest free period",
    description: "0% up to 160 days"
  },
  {
    title: "Payment system",
    description: "Mastercard, Visa"
  },
  {
    title: "Maximum credit limit on the card",
    description: "600 000 ₽"
  },
  {
    title: "Replenishment and withdrawal",
    description: "At any ATM. Top up your credit card for free with cash or transfer from other cards"
  },
  {
    title: "Max cashback per month",
    description: "15 000 ₽"
  },
  {
    title: "Transaction Alert",
    description: [
      "60 ₽ — SMS or push notifications", 
      "0 ₽ — card statement, information about transactions in the online bank"
    ]
  },
]