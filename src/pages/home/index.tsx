import {
  EmailSubscribe,
  Currency,
  MapSection,
  YouCanUse,
  ChooseCards,
  News,
} from "widgets";

export const HomePage = () => {
  return (
    <main>
      <ChooseCards />
      <YouCanUse />
      <Currency />
      <MapSection />
      <News />
      <EmailSubscribe />
    </main>
  );
};
