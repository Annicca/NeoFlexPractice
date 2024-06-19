import {
  EmailSubscribe,
  Currency,
  MapSection,
  YouCanUse,
  ChooseCards,
} from "widgets";

export const HomePage = () => {
  return (
    <main>
      <ChooseCards />
      <YouCanUse />
      <Currency />
      <MapSection />
      <EmailSubscribe />
    </main>
  );
};
