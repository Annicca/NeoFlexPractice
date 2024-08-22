import {
    EmailSubscribe,
    Currency,
    MapSection,
    YouCanUse,
    ChooseCards,
    News,
  } from "widgets";
  
const HomePage = () => {
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

export default HomePage;