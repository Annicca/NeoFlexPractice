import { TAboutCardItem, TCashback, TCondition, TFaq, TLink, TOption, TRates } from "shared/types";
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

export const CASHBACK_ITEMS: TCashback[] = [
  {
    name: "For food delivery, cafes and restaurants",
    percent: 5,
    isUp: false
  },
  {
    name: "In supermarkets with our subscription",
    percent: 5,
    isUp: false
  },
  {
    name: "In clothing stores and children's goods",
    percent: 2,
    isUp: false
  },
  {
    name: "Other purchases and payment of services and fines",
    percent: 1,
    isUp: false
  },
  {
    name: "Shopping in online stores",
    percent: 3,
    isUp: true
  },
  {
    name: "Purchases from our partners",
    percent: 30,
    isUp: false
  },
];

export const FAQ_ISSUING_RESIVING: TFaq[] = [
  {
    question: "How to get a card?",
    answer: "We will deliver your card by courier free of charge. Delivery in Moscow and St. Petersburg - 1-2 working days. For other regions of the Russian Federation - 2-5 working days."
  },
  {
    question: "What documents are needed and how old should one be to get a card?",
    answer: "Need a passport. You must be between 20 and 70 years old."
  },
  {
    question: "In what currency can I issue a card?",
    answer: "In rubles, dollars or euro"
  },
  {
    question: "How much income do I need to get a credit card?",
    answer: "To obtain a credit card, you will need an income of at least 25,000 rubles per month after taxes."
  },
  {
    question: "How do I find out about the bank's decision on my application?",
    answer: "After registration, you will receive an e-mail with a decision on your application."
  },
];

export const FAQ_USING_CREDIT: TFaq[] = [
  {
    question: "What is an interest free credit card?",
    answer: "A credit card with a grace period is a bank card with an established credit limit, designed for payment, reservation of goods and services, as well as for receiving cash, which allows you to use credit funds free of charge for a certain period."
  },
  {
    question: "How to activate a credit card",
    answer: "You can activate your credit card and generate a PIN code immediately after receiving the card at a bank branch using a PIN pad."
  },
  {
    question: "What is a settlement date?",
    answer: "The settlement date is the date from which you can pay off the debt for the reporting period. The settlement date falls on the first calendar day following the last day of the reporting period. The first settlement date is reported by the bank when transferring the issued credit card to the client, and then in the monthly account statement."
  },
  {
    question: "What do I need to know about interest rates?",
    answer: "For each reporting period from the 7th day of the previous month to the 6th day of the current month inclusive, a statement is generated for the credit card. The statement contains information on the amount and timing of the minimum payment, as well as the total amount of debt as of the date of issue."
  },
];

export const STEPS = [
  "Fill out an online application - you do not need to visit the bank",
  "Find out the bank's decision immediately after filling out the application",
  "The bank will deliver the card free of charge, wherever convenient, to your city"
]

export const TERMS: TOption[] = [
  {
    label: "6 month",
    value: 6,
  },
  {
    label: "12 month",
    value: 12,
  },
  {
    label: "18 month",
    value: 18,
  },
  {
    label: "24 month",
    value: 24,
  },
]

export const MIN_AMOUNT = 15000
export const MAX_AMOUNT = 600000